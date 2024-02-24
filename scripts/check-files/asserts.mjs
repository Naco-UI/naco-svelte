// @ts-check
import { existsSync } from 'fs'
import { join } from 'path'

/**
 * Checks if file exists in module
 * @param {import('./types.mjs').CheckPath} path
 * @returns {boolean}
 */
export function fileExists({ directory, file }) {
  const filePath = join(directory, file)
  return existsSync(filePath)
}

/**
 * Applies multiple checks to a single directory and returns problems
 * @param {import("./types.mjs").ModulePath} module - Single directory path
 * @param {import("./types.mjs").Check[]} checks - Array of Check objects
 * @returns {import("./types.mjs").Problem[]} - Array of Problem objects for each failed check
 */
export function applyModuleChecks({ directory, module, type }, checks) {
  return checks.reduce(
    /**
     * @param {import("./types.mjs").Problem[]} problems
     * @param {import("./types.mjs").Check} check
     */
    (problems, check) => {
      if (check.types === 'all' || check.types.includes(type)) {
        const fileName = check.fileName(module)
        const filePath = directory + '/' + fileName

        if (
          !check.assert({
            file: fileName,
            directory,
            module,
          })
        ) {
          problems.push({
            filePath,
            message: check.title,
            level: check.level,
          })
        }
      }
      return problems
    },
    [],
  )
}
