const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['nuxt-icon-font'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-icon-font.js',
    options
  })
}

module.exports.meta = require('../package.json')
