import fg from 'fast-glob'
import { writeFile } from 'fs/promises'
import { basename, dirname, join } from 'path'
import { minify } from 'terser'

import { exec, mapFiles, readTextFile, rm, rmrf, startAction } from './utils.mjs'

/**
 * @param {[string, string][]} commands
 */
async function build(commands) {
  for (const [command, title] of commands) {
    const done = startAction(title, command)
    await exec(command)
    done()
  }
}

async function removeJunk() {
  const done = startAction('Remove docs from package', 'mdx, stories')
  await rmrf('dist/*/*/*.stories.*')
  await rmrf('dist/*/*/*.mdx')
  done()
}

/**
 * @param {string[]} jsFiles
 * @param {string[]} tsFiles
 * @returns {Promise<string[]>}
 */
async function clearTypes(jsFiles, tsFiles) {
  const done = startAction('Clear types', 'get rid of .types.js')
  // Replace '.types.js' with '.types.d.ts' in TypeScript files
  await mapFiles(tsFiles, (content) => {
    content = content.replaceAll('.types.js', '.types.d.ts')
    return content
  })
  // Remove '.types.js' exports from JavaScript files
  await mapFiles(jsFiles, (content) => {
    content = content.replace(/export (.*)\.types\.js';/gm, '\r')
    return content
  })
  // Remove '.types.js' files
  const typesJs = jsFiles.filter((path) => path.endsWith('.types.js'))
  await rm(...typesJs)
  done()
  return typesJs
}

/**
 * @param {string} path
 */
async function minifyJS(path) {
  const content = await readTextFile(path)
  const { code, map } = await minify(content, { sourceMap: true })
  if (code && map) {
    const mapPath = join(dirname(path), `${basename(path)}.map`)
    await writeFile(path, code)
    await writeFile(mapPath, String(map))
  }
}

/**
 * @param {string[]} jsFiles
 */
async function minifyFiles(jsFiles) {
  const done = startAction('Minify package', 'terser')
  await Promise.all(jsFiles.map(minifyJS))
  done()
}

async function main() {
  await build([
    ['rm -rf dist', 'Clear build directory'],
    ['pnpm vite build', 'Build sources'],
    ['pnpm svelte-kit sync', 'Synchronize type definitions'],
    ['pnpm svelte-package', 'Create a package'],
  ])
  await removeJunk()
  const [jsFiles, tsFiles] = await Promise.all([
    await fg(['dist/**/*.js']),
    await fg(['dist/**/*.ts']),
  ])
  const removedJsFiles = await clearTypes(jsFiles, tsFiles)
  const restJsFiles = jsFiles.filter((path) => !removedJsFiles.includes(path))
  await minifyFiles(restJsFiles)
}

main()
