#!/usr/bin/env node
import { readFile } from 'fs/promises'

/**
 * asd
 * @returns {Promise<void>}
 */
async function main() {
  const content = await readFile('package.json', { encoding: 'utf-8' })
  const pack = JSON.parse(content)
  process.stdout.write(pack.version)
}

main()
