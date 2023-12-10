# tsx-to-jsx-cli

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

`tsx-to-jsx-cli` is a CLI tool that converts TypeScript (ts/tsx) files to JavaScript (js/jsx) files from a specified source directory, saving the result in a destination directory.

## Usage

```bash
Usage: tsx-to-jsx [options]

A CLI for converting tsx to jsx

Options:
  -s, --srcDir <path>  Source directory to convert
  -d, --dstDir <path>  Destination directory to save to
  -v, --version        Display the version number
  -h, --help           display help for command
```

```bash
npx tsx-to-jsx-cli -s <source-directory> -d <destination-directory>
```

Replace <source-directory> with the path to your TypeScript source files and <destination-directory> with the desired path for the compiled JavaScript files.

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
