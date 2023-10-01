#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises'

const CHANGELOG_PATH = 'CHANGELOG.md'

async function main() {
  let content = await readFile(CHANGELOG_PATH, { encoding: 'utf-8' })
  content = content.replace(/^### \[/gm, '## [')
  content = content.replace('\n\n\n', '\n\n')
  await writeFile(CHANGELOG_PATH, content)
}

main()
