import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import omit from 'lodash/omit';
import values from 'lodash/values';
import locales from '../../i18n/locales';
import {localizedPath} from '../../i18n/path';

const SeoWithMetadata = ({data, lang, title, description, image, pageContext}) => {
  const {site: {siteMetadata}} = data;
  const schemaOrgJsonLd = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteMetadata.siteUrl,
      name: title,
      author: siteMetadata.author,
      alternateName: siteMetadata.title,
      inLanguage: lang
    }
  ];
  const alternateLocales = omit(locales, lang);
  const imageUrl = image && `${siteMetadata.siteUrl}${image}`;
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {imageUrl && (<meta name="image" content={imageUrl} />)}
      {values(alternateLocales).map(locale =>
        (<link
          key={locale.path}
          rel="alternate"
          hreflang={locale.language}
          href={localizedPath(locale)(pageContext.pagePath)}
        />)
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      {imageUrl && (<meta property="og:image" content={imageUrl} />)}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && (<meta name="twitter:image" content={imageUrl} />)}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJsonLd)}
      </script>
    </Helmet>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        social {
          twitter
        }
      }
    }
  }
`;

const Seo = props =>
  <StaticQuery
    query={query}
    render={data => <SeoWithMetadata data={data} {...props} />}
  />;

Seo.propTypes = {
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  pageContext: PropTypes.shape({
    pagePath: PropTypes.string.isRequired
  }).isRequired
};

Seo.defaultProps = {
  image: null
};

export default Seo;
