#!/usr/bin/env node

import process from 'node:process'
import { existsSync } from 'node:fs'
import * as p from '@clack/prompts'
import { Command } from 'commander'
import { convertTsxToJsx } from 'tsx-to-jsx'

const CLI_NAME = 'tsx-to-jsx'
const CLI_VERSION = 'CLI-VERSION'

interface CLIOptions {
  srcDir: string
  dstDir: string
}

async function runCli() {
  const program = new Command()
    .name(CLI_NAME)
    .description('A CLI for converting tsx to jsx')
    .option('-s, --srcDir <path>', 'Source directory to convert')
    .option('-d, --dstDir <path>', 'Destination directory to save to')
    .version(CLI_VERSION, '-v, --version', 'Display the version number')
    .parse(process.argv)

  const options = program.opts() as CLIOptions

  const project = await p.group(
    {
      ...(!options.srcDir && {
        srcDir: () =>
          p.text({
            message: 'Source directory to convert',
            validate: (filePath) => {
              if (!existsSync(filePath))
                return 'Directory does not exist.'
            },
          }),
      }),
      ...(!options.srcDir && {
        dstDir: () =>
          p.text({
            message: 'Destination directory to save to',
          }),
      }),
    },
    {
      onCancel() {
        process.exit(1)
      },
    },
  )

  const dstDir = project.dstDir ?? options.dstDir
  const srcDir = project.dstDir ?? options.srcDir

  await convertTsxToJsx(srcDir, dstDir)
}

runCli()
