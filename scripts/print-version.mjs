#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
