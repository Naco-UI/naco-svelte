import type { ColorScheme, OS } from '$lib/index.js'

import { parseProps } from './parse.js'
import type {
  ThemeDescription,
  ThemeManifest,
  ThemeProperties,
} from './theme.types.js'

export const camelToSnakeCase = (str: string): string =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

export const mergeProps = (
  a: ThemeProperties,
  b: ThemeProperties,
): ThemeProperties => Object.assign(a, b)

export function getTheme(
  manifest: ThemeManifest,
  os: OS,
  scheme: ColorScheme,
): ThemeProperties {
  const themeProps: ThemeProperties = {}

  function addSchemeProps(description: ThemeDescription): void {
    mergeProps(themeProps, parseProps(description, scheme))
  }

  if (manifest.common) {
    addSchemeProps(manifest.common)
  }
  if (manifest[os]) {
    addSchemeProps(manifest[os] as ThemeDescription)
  }
  return themeProps
}

export function uniqueValues<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}
