// @ts-check
import kleur from 'kleur'

/** @type {Record<import("./types.mjs").ProblemLevel, import("kleur").Color>} */
const problemColor = {
  warning: kleur.yellow,
  error: kleur.red,
}

/**
 * @param {Record<string, import('./types.mjs').Problem[]>} problems
 */
export function reportProblems(problems) {
  const keys = Object.keys(problems)
  if (keys.length === 0) {
    console.log(kleur.green('All checks passed!'))
    return
  }
  let hasErrors = false
  for (const entry of keys) {
    let entryMessage = `${entry}\n`
    for (const problem of problems[entry]) {
      if (problem.level === 'error' && !hasErrors) {
        hasErrors = true
      }
      const formattedMessage = problemColor[problem.level](problem.message)
      const formattedPath = kleur.dim(problem.filePath)
      entryMessage += `- ${formattedMessage} ${formattedPath}\n`
    }
    console.log(entryMessage.trim())
  }
  if (hasErrors) {
    process.exit(1)
  }
}
