#!/usr/bin/env node
import fg from 'fast-glob'
import { existsSync } from 'fs'
import kleur from 'kleur'
import { basename, join } from 'path'

/**
 * @typedef Problem
 * @prop {string} message
 * @prop {string} path
 */

/**
 * @param {string} name
 * @param {string} path
 * @returns {Array<Problem>}
 */
function assertEntry(name, path) {
  const problems = []
  const checks = [
    ['Docs', `${name}.docs.mdx`],
    ['Stories', `${name}.stories.svelte`],
    ['Index re-exports', 'index.ts'],
  ]
  for (const [title, fileName] of checks) {
    const filePath = join(path, fileName)
    if (!existsSync(filePath)) {
      problems.push({
        message: `${title} file is not found`,
        path: filePath,
      })
    }
  }
  return problems
}

async function getEntries() {
  const categories = await fg(['src/lib/*'], {
    onlyDirectories: true,
    deep: 0,
  })
  const entriesGlob = categories
    .map(path => join(path, '*'))
  const entries = await fg(entriesGlob, {
    onlyDirectories: true,
    deep: 0,
  })
  return entries
}

/**
 * @param {Record<string, Problem[]>} problems
 */
async function reportProblems(problems) {
  const keys = Object.keys(problems)
  if (keys.length === 0) {
    console.log(kleur.green('The documentation is correct'))
    return
  }
  for (const entry of keys) {
    let entryMessage = `${entry}\n`
    for (const problem of problems[entry]) {
      entryMessage += `- ${kleur.red(problem.message)} ${kleur.dim(problem.path)}\n`
    }
    console.log(entryMessage.trim())
  }
  process.exit(1)
}

async function main() {
  const entries = await getEntries()
  /**
   * @type {Record<string, Problem[]>}
   */
  const problems = {}
  entries.forEach((path) => {
    const name = basename(path)
    const entryProblems = assertEntry(name, path)
    if (entryProblems.length > 0) {
      problems[name] = entryProblems
    }
  })
  reportProblems(problems)
}

main()
