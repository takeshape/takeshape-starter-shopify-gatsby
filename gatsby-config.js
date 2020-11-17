require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Shape Shop Lookbook'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-takeshape',
      options: {
        apiKey: process.env.TAKESHAPE_TOKEN,
        projectId: process.env.TAKESHAPE_PROJECT,
      },
    },
  ],
}
