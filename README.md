# nuxt-icon-font
Read a set of SVG icons and ouput a TTF/EOT/WOFF/WOFF2/SVG font, Generator of fonts from SVG icons.

[Setup](#Setup) · [Options](#Options) · [License](#License) . [Development](#Development)

## Setup

1. Add `nuxt-icon-font` dependency to your project

```bash
yarn add nuxt-icon-font # or npm install nuxt-icon-font --save
```

2. Add `nuxt-icon-font` to the `buildModule` section of `nuxt.config.js`

```js
{
  buildModule: [
    // Simple usage
    'nuxt-icon-font',

    // With options
    ['nuxt-icon-font', { /* module options */ }]
  ]
}
```
Or
```js
{
  buildModule: [
    // Simple usage
    'nuxt-icon-font',
  ],
  nuxtIconFont: {
    // put options here
  }
}
```

## Options

### dist

> Type: `String`  
> Default value: `assets/fonts`  

The output directory.

### src

> Type: `String`  
> Default value: `svg`  

output path

### fontName

> Type: `String`  
> Default value: `iconfont`  

The font family name you want.

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) omid <o.bakhshi.dev@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-icon-font/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-icon-font

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-icon-font.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-icon-font

[github-actions-ci-src]: https://github.com/omidbakhshi/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/omidbakhshi/actions?query=workflow%3Aci

[codecov-src]: https://codecov.io/gh/omidbakhshi/nuxt-icon-font
[codecov-href]: https://codecov.io/gh/omidbakhshi/nuxt-icon-font

[license-src]: https://github.com/omidbakhshi/nuxt-icon-font/blob/master/LICENSE
[license-href]: https://github.com/omidbakhshi/nuxt-icon-font/blob/master/LICENSE
