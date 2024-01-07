import type { ColorScheme, OS } from '$lib/index.js'

import type { ThemeManifest } from './theme.types.js'
import { getTheme } from './utils.js'

const osVariants: OS[] = ['mac', 'linux']
const schemeVariants: ColorScheme[] = ['light', 'dark']

interface ValidationResult {
  os: string
  scheme: string
  property: string
}

function findMissing(themeKeys: Record<string, string[]>): ValidationResult[] {
  const props = Object.values(themeKeys).flat()
  const uniqueProps = Array.from(new Set(props))
  const misses: ValidationResult[] = []
  for (const key in themeKeys) {
    const [os, scheme] = key.split('.')
    for (const property of uniqueProps) {
      if (!themeKeys[key].includes(property)) {
        misses.push({
          os,
          scheme,
          property,
        })
      }
    }
  }
  return misses
}

export function validateManifest(manifest: ThemeManifest): void {
  const themeKeys: Record<string, string[]> = {}
  for (const os of osVariants) {
    for (const scheme of schemeVariants) {
      const themeVariant = getTheme(manifest, os, scheme)
      themeKeys[`${os}.${scheme}`] = Object.keys(themeVariant)
    }
  }
  const results = findMissing(themeKeys)
  if (results.length < 1) {
    return
  }
  // eslint-disable-next-line no-console
  console.warn(
    `Some properties of the theme are not set for ${manifest.prefix}. The following properties are missing:`,
    findMissing(themeKeys),
  )
}
