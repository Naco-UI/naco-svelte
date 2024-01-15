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
      // If 'all' or module type is in the types array, apply the check
      if (check.types === 'all' || check.types.includes(type)) {
        const fileName = check.fileName(module)
        const filePath = directory + '/' + fileName

        if (!check.assert({
          directory,
          file: fileName,
          module,
        })) {
          problems.push({
            message: check.title,
            filePath,
          })
        }
      }
      return problems
    }, [])
}
