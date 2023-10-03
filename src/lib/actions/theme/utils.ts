import type { ThemeProperties } from './theme.types.js'

export const camelToSnakeCase = (str: string): string =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

export const mergeProps = (
  a: ThemeProperties,
  b: ThemeProperties,
): ThemeProperties => Object.assign(a, b)
