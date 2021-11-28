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
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-google-analytics-gtag',
      options: {
        trackingId: 'UA-1509094-4',
        enableLocalStorage: false
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
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: 'https://blog.marcnuri.com/feed.xml',
        name: 'BlogMarcNuriCom'
      }
    },
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'FeedBlogMarcNuriCom',
        imagePath: 'enclosure.url'
      }
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: 'https://blog.marcnuri.com/es/feed.xml',
        name: 'BlogMarcNuriComEs'
      }
    },
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'FeedBlogMarcNuriComEs',
        imagePath: 'enclosure.url'
      }
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 90,
        failOnError: true
      }
    },
    'gatsby-transformer-sharp'
  ]
};
