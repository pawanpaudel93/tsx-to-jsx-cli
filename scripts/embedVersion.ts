import { resolve } from 'node:path'
import type { PathLike } from 'node:fs'
import fs, { readFileSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'

const version = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' }),
).version

const paths = ['./index.js']

export async function checkPath(path: PathLike): Promise<boolean> {
  return fs.promises
    .stat(path)
    .then(_ => true)
    .catch(_ => false)
}

(async function (): Promise<void> {
  const dir = resolve('./dist')
  await Promise.all(
    paths.map(p =>
      (async (): Promise<void> => {
        const path = resolve(dir, p)
        if (!(await checkPath(path)))
          throw new Error(`${path} does not exist!`)

        const content = await readFile(path, { encoding: 'utf-8' })
        const newContent = content.replace('CLI-VERSION', version)
        await writeFile(path, newContent, { encoding: 'utf-8' })
      })(),
    ),
  )
})()
