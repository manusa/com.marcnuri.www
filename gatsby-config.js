const sitemap = require('./sitemap');

module.exports = {
  siteMetadata: {
    title: 'Marc Nuri',
    siteUrl: 'https://www.marcnuri.com',
    year: 2021,
    description: 'I craft code',
    author: 'Marc Nuri',
    social: {
      twitter: '@MarcNuri'
    },
    api: {
      uuid: '/api/uuid'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1509094-4'
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        resolvePages: sitemap.resolvePages
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        short_name: 'Marc Nuri',
        start_url: '/',
        background_color: '#78bcda',
        theme_color: '#78bcda',
        display: 'browser',
        icon: 'src/components/avatar/face-512-t.png'
      }
    },
    'gatsby-plugin-material-ui'
  ]
};
