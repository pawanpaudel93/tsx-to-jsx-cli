# tsx-to-jsx-cli

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

`tsx-to-jsx-cli` is a Node.js package and CLI tool that converts TypeScript (.tsx) files to JavaScript (.jsx) files from a specified source directory, saving the result in a destination directory.

## Installation

Before using the tool, make sure you have [Node.js](https://nodejs.org/) installed on your machine. Please install the package using your preferred package manager.

```bash
npm install tsx-to-jsx-cli
```

```bash
yarn add tsx-to-jsx-cli
```

```bash
pnpm add tsx-to-jsx-cli
```

```bash
bun install tsx-to-jsx-cli
```

## Usage

```Typescript
import { convertTsxToJsx } from 'tsx-to-jsx-cli'
await convertTsxToJsx(sourceDirectory, destinationDirectory)
```

### CLI Usage

Replace `<source-directory>` with the path to your TypeScript source files and `<destination-directory>` with the desired path for the compiled JavaScript files.

```bash
tsx-to-jsx-cli -s <source-directory> -d <destination-directory>
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [Pawan Paudel](https://github.com/pawanpaudel93)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/tsx-to-jsx-cli?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/tsx-to-jsx-cli
[npm-downloads-src]: https://img.shields.io/npm/dm/tsx-to-jsx-cli?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/tsx-to-jsx-cli
[bundle-src]: https://img.shields.io/bundlephobia/minzip/tsx-to-jsx-cli?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=tsx-to-jsx-cli
[license-src]: https://img.shields.io/github/license/pawanpaudel93/tsx-to-jsx-cli.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/pawanpaudel93/tsx-to-jsx-cli/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/tsx-to-jsx-cli
