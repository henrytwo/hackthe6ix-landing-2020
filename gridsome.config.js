// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { resolve, basename } = require('path');
require('dotenv').config();

module.exports = {
  css: {
    loaderOptions: {
      css: {
        modules: true,
        importLoaders: 1,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve(__dirname, 'src/assets'),
        '@components': resolve(__dirname, 'src/components'),
        '@data': resolve(__dirname, 'src/data'),
        '@graphql': resolve(__dirname, 'src/graphql'),
        '@layouts': resolve(__dirname, 'src/layouts'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@styles': resolve(__dirname, 'src/styles'),
        '@utils': resolve(__dirname, 'src/utils'),
      },
    },
  },
  siteName: 'Hack The 6ix',
  siteDescription: 'Hack the 6ix is the largest summer student run, not for profit hackathon located in the heart of Toronto. Every year, we select 400+ participants from a pool of over 1500 remarkable developers, designers, and innovators. We believe the diversity and talent of our hackers contribute greatly to the success of our event. Now in its sixth iteration, Hack the 6ix has established itself as a key player in the Toronto tech ecosystem and provides a platform for students to present their ideas of the future.',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_TOKEN,
        space: process.env.CONTENTFUL_SPACE,
        host: process.env.CONTENTFUL_HOST,
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GOOGLE_ANALYTICS,
      },
    },
  ],
}
