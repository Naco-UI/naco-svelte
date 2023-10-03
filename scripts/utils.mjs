import * as cp from 'child_process'
import { readFile, writeFile } from 'fs/promises'
import kleur from 'kleur'
import { promisify } from 'util'

export const exec = promisify(cp.exec)

/**
 * @param  {...string} paths
 * @returns {Promise<void>}
 */
export const rm = async(...paths) => {
  await exec(`rm ${paths.join(' ')}`)
}

/**
 * @param  {...string} paths
 * @returns {Promise<void>}
 */
export const rmrf = async(...paths) => {
  await exec(`rm -rf ${paths.join(' ')}`)
}

/**
 *
 * @param {string} message
 * @param {string | undefined} description
 */
export function startAction(message, description = undefined) {
  const formatMessage = (/** @type {boolean} */ start) => {
    const parts = []
    parts.push(start ? kleur.white(message) : kleur.green(message))
    if (description) {
      parts.push(kleur.gray(description))
    }
    return parts.join(' ')
  }
  process.stdout.write(formatMessage(true))
  return () => {
    process.stdout.write('\r' + formatMessage(false) + '\n')
  }
}

/**
 * @param {string} path
 * @returns {Promise<string>}
 */
export const readTextFile = (path) => readFile(path, { encoding: 'utf-8' })

/**
 * @param {string} path
 * @param {(t: string) => string} transform
 * @returns {Promise<void>}
 */
export async function mapFile(path, transform) {
  let content = await readTextFile(path)
  content = transform(content)
  await writeFile(path, content)
}

/**
* @param {string[]} paths
* @param {(t: string) => string} transform
* @returns {Promise<void>}
*/
export async function mapFiles(paths, transform) {
  await Promise.all(
    paths.map((path) => mapFile(path, transform)),
  )
}
