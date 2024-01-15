import fg from 'fast-glob'
import { join } from 'path'

const MODULES_GLOB = 'src/lib/*'

const fgOptions = {
  onlyDirectories: true,
  deep: 0,
}

/**
 * @returns {Promise<import('./types.mjs').ModulePath[]>}
 */
export async function getModules() {
  const categories = await fg([MODULES_GLOB], fgOptions)
  const moduleGlobs = categories.map(category => join(category, '*'))
  const modules = await fg(moduleGlobs, fgOptions)
  return modules.map(directory => {
    const segments = directory.split('/')
    const module = segments.pop()
    const type = segments.pop()
    if (!module) {
      throw new Error(`Wrong module path '${directory}'`)
    }
    if (!isAllowedType(type)) {
      throw new Error(`Unknown module type '${type}'`)
    }

    return {
      module,
      type,
      directory,
    }
  })
}

/**
 * @param {any} value
 * @returns {value is import("./types.mjs").ModuleType}
 */
function isAllowedType(value) {
  /** @type {import("./types.mjs").ModuleType[]} */
  const allowedTypes = [
    'actions',
    'components',
    'layouts',
    'utils',
  ]
  return allowedTypes.includes(value)
}
