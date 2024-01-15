#!/usr/bin/env node
import kleur from 'kleur'

import { applyModuleChecks, fileExists } from './asserts.mjs'
import { getModules } from './modules.mjs'

/** @type {import('./types.mjs').Check[]} */
export const checks = [
  {
    title: 'Docs',
    types: 'all',
    fileName: name => `${name}.docs.mdx`,
    assert: fileExists,
  },
  {
    title: 'Stories',
    types: 'all',
    fileName: name => `${name}.stories.svelte`,
    assert: fileExists,
  },
  {
    title: 'Index re-exports',
    types: 'all',
    fileName: () => 'index.ts',
    assert: fileExists,
  },
  {
    title: 'Theme manifest',
    types: ['layouts', 'components'],
    fileName: name => `${name}.theme.ts`,
    assert: (path) => {
      const skip = [
        'NacoTheme',
        'ThemeProvider',
        'Typography',
      ]
      return skip.includes(path.module) || fileExists(path)
    },
  },
]

/**
 * @param {Record<string, import('./types.mjs').Problem[]>} problems
 */
function reportProblems(problems) {
  const keys = Object.keys(problems)
  if (keys.length === 0) {
    console.log(kleur.green('The documentation is correct'))
    return
  }
  for (const entry of keys) {
    let entryMessage = `${entry}\n`
    for (const problem of problems[entry]) {
      entryMessage += `- ${kleur.red(problem.message)} ${kleur.dim(problem.filePath)}\n`
    }
    console.log(entryMessage.trim())
  }
  process.exit(1)
}

async function main() {
  const modules = await getModules()
  const results = modules.reduce(
    /**
     * @param {Record<string, import('./types.mjs').Problem[]>} problems
     * @param {import('./types.mjs').ModulePath} module
     */
    (problems, module) => {
      const moduleProblems = applyModuleChecks(module, checks)
      if (moduleProblems.length > 0) {
        problems[module.module] = moduleProblems
      }
      return problems
    },
    {},
  )
  reportProblems(results)
}

main()
