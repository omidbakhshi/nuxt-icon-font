# nuxt-icon-font

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> auto generate icon-font from svg

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-icon-font` dependency to your project

```bash
yarn add nuxt-icon-font # or npm install nuxt-icon-font
```

2. Add `nuxt-icon-font` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-icon-font',

    // With options
    ['nuxt-icon-font', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) omid <omid.b.69@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-icon-font/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-icon-font

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-icon-font.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-icon-font

[github-actions-ci-src]: https://github.com/omidbakhshi/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/omidbakhshi/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/omidbakhshi.svg
[codecov-href]: https://codecov.io/gh/omidbakhshi

[license-src]: https://img.shields.io/npm/l/nuxt-icon-font.svg
[license-href]: https://npmjs.com/package/nuxt-icon-font
