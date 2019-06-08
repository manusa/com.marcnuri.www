import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';

const SeoWithMetadata = ({data, lang, title, description, image}) => {
  const {site: {siteMetadata}} = data;
  const schemaOrgJsonLd = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteMetadata.siteUrl,
      name: title,
      alternateName: siteMetadata.title
    }
  ];
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {image && (<meta name="image" content={image} />)}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && (<meta property="og:image" content={image} />)}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
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
  image: PropTypes.string
};

Seo.defaultProps = {
  image: null
};

export default Seo;
