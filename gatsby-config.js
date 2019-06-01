module.exports = {
  siteMetadata: {
    title: 'www.marcnuri.com - Marc Nuri',
    siteUrl: 'https://www.marcnuri.com',
    description: 'Software developer',
    social: {
      twitter: '@MarcNuri',
    },
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
    }
  ]
};
