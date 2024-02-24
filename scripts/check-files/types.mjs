// @ts-check
/**
 * @typedef {'components' | 'utils' | 'actions' | 'layouts'} ModuleType
 */

/**
 * @typedef ModulePath
 * @prop {string} directory
 * @prop {string} module
 * @prop {ModuleType} type
 */

/**
 * @typedef CheckPath
 * @prop {string} directory
 * @prop {string} file
 * @prop {string} module
 */

/**
 * @typedef {'warning' | 'error'} ProblemLevel
 **/

/**
 * @typedef Check
 * @prop {string} title
 * @prop {ModuleType[] | 'all'} types
 * @prop {(moduleName: string) => string} fileName
 * @prop {(path: CheckPath) => boolean} assert
 * @prop {ProblemLevel} level
 */

/**
 * @typedef Problem
 * @prop {string} message
 * @prop {string} filePath
 * @prop {ProblemLevel} level
 */
