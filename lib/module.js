const svgtofont = require('svgtofont')
const consola = require('consola')

const defaultOptions = {
  src: '/static/svg', // svg path
  dist: '/assets/fonts', // output path
  fontName: 'icon-font', // font name
  css: true
}

module.exports = function (moduleOptions) {
  // default options that need to work with icon font generator
  const options = {
    ...defaultOptions,
    ...this.options.nuxtIconFont,
    ...moduleOptions
  }

  // delete null options from options object
  const optionProps = Object.getOwnPropertyNames(options)
  for (let i = 0; i < optionProps.length; i++) {
    const optionProp = optionProps[i]
    if (options[optionProp] === null || options[optionProp] === undefined || options[optionProp] === '') {
      delete options[optionProp]
    }
  }

  this.nuxt.hook('modules:done', () => {
    const mamad = true
    console.log(mamad)
    try {
      svgtofont(options)
    } catch (e) {
      consola.error(new Error(e))
    }
  })
}

module.exports.meta = require('../package.json')
