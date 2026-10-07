import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';
import values from 'lodash/values';
import locales from '../i18n/locales';
import {localizedPath} from '../i18n/path';
import {person, personSchema} from './person';
import face512 from './avatar/face-512.png';

const OG_LOCALES = {en: 'en_US', es: 'es_ES'};

const SeoWithMetadata = ({data, title, description, image, pageContext}) => {
  const {site: {siteMetadata}} = data;
  const {siteUrl} = siteMetadata;
  const lang = pageContext.lang ?? 'en';
  // This site is also served from its GitHub Pages origin (Apache proxies www.marcnuri.com to it):
  // the absolute canonical URL tells search engines which copy to index
  const absoluteUrlOf = locale => `${siteUrl}${localizedPath(locale)(pageContext.pagePath)}`;
  const canonicalUrl = absoluteUrlOf(pageContext.locale ?? locales[lang]);
  const defaultLocale = values(locales).find(locale => locale.default);
  const isHome = pageContext.pagePath === '/';
  const imageUrl = image && `${siteUrl}${image}`;
  const schemaOrgJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema({lang, image: `${siteUrl}${face512}`}),
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteMetadata.title,
        author: {'@id': person.id},
        publisher: {'@id': person.id}
      },
      {
        '@type': isHome ? 'ProfilePage' : 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: {'@id': `${siteUrl}/#website`},
        ...(isHome ? {mainEntity: {'@id': person.id}} : {about: {'@id': person.id}})
      }
    ]
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={person.name} />
      <link rel="canonical" href={canonicalUrl} />
      {imageUrl && (<meta name="image" content={imageUrl} />)}
      {values(locales).map(locale =>
        (<link key={locale.path} rel="alternate" hrefLang={locale.language} href={absoluteUrlOf(locale)} />)
      )}
      <link rel="alternate" hrefLang="x-default" href={absoluteUrlOf(defaultLocale)} />
      {/* The profiles of the person: each verifies that this site links back to it */}
      {[person.profilePage[lang] ?? person.profilePage.en, ...person.profiles].map(href =>
        (<link key={href} rel="me" href={href} />)
      )}
      {/* A profile on the home page only: the other pages are tools */}
      <meta property="og:type" content={isHome ? 'profile' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteMetadata.author} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={OG_LOCALES[lang] ?? OG_LOCALES.en} />
      {isHome && <meta property="profile:first_name" content={person.givenName} />}
      {isHome && <meta property="profile:last_name" content={person.familyName} />}
      {imageUrl && (<meta property="og:image" content={imageUrl} />)}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:site" content={siteMetadata.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && (<meta name="twitter:image" content={imageUrl} />)}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJsonLd)}
      </script>
    </>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        author
        social {
          twitter
        }
      }
    }
  }
`;

export const Seo = props => {
  const data = useStaticQuery(query);
  return <SeoWithMetadata data={data} {...props} />;
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  pageContext: PropTypes.shape({
    pagePath: PropTypes.string.isRequired,
    lang: PropTypes.string,
    locale: PropTypes.shape({})
  }).isRequired
};

Seo.defaultProps = {
  image: null
};
