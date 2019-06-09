const sitemap = require('./sitemap');

module.exports = {
  siteMetadata: {
    title: 'www.marcnuri.com - Marc Nuri',
    siteUrl: 'https://www.marcnuri.com',
    description: 'I craft code',
    social: {
      twitter: '@MarcNuri'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules')
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1509094-4'
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: sitemap.serializer
      }
    }
  ]
};
