// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const {resolve} = require('path');

module.exports = {
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
  siteName: 'Hack the 6ix',
  titleTemplate: 'Hack the 6ix',
  plugins: []
};
