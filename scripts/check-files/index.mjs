#!/usr/bin/env node
// @ts-check
import { applyModuleChecks, fileExists } from './asserts.mjs'
import { getModules } from './modules.mjs'
import { reportProblems } from './report.mjs'

/** @type {import('./types.mjs').Check[]} */
export const checks = [
  {
    title: 'Docs',
    types: 'all',
    fileName: (name) => `${name}.docs.mdx`,
    assert: fileExists,
    level: 'error',
  },
  {
    title: 'Stories',
    types: 'all',
    fileName: (name) => `${name}.stories.svelte`,
    assert: fileExists,
    level: 'error',
  },
  {
    title: 'Index re-exports',
    types: 'all',
    fileName: () => 'index.ts',
    assert: fileExists,
    level: 'error',
  },
  {
    title: 'Theme manifest',
    types: ['layouts', 'components'],
    level: 'warning',
    fileName: (name) => `${name}.theme.ts`,
    assert: (path) => {
      const skip = ['NacoTheme', 'ThemeProvider', 'Typography']
      return skip.includes(path.module) || fileExists(path)
    },
  },
]

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
