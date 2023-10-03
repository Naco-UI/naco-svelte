import type { ColorScheme, OS } from '$lib/index.js'

import { parseProps } from './parse.js'
import type {
  ThemeDescription,
  ThemeHooks,
  ThemeManifest,
  ThemeProperties,
  ThemeProps,
} from './theme.types.js'
import { mergeProps } from './utils.js'

function getTheme(
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

function applyProps(
  el: HTMLElement,
  props: ThemeProperties,
  prefix: string,
  debug?: boolean,
): void {
  const prefixedProps: Record<string, string> = {}
  for (const key in props) {
    const property = `--${prefix}-${key}`
    el.style.setProperty(property, props[key])
    if (debug) {
      prefixedProps[property] = props[key]
    }
  }
  if (debug) {
    // eslint-disable-next-line no-console
    console.log(`Theme update for ${prefix}`, prefixedProps)
  }
}

export function theme(el: HTMLElement, initial: ThemeProps): ThemeHooks {
  let latestManifest: ThemeManifest = initial.manifest
  let os = initial.os
  let scheme = initial.scheme

  function applyTheme(): void {
    const props = getTheme(latestManifest, os, scheme)
    applyProps(el, props, latestManifest.prefix, initial.debug)
  }

  applyTheme()

  function update(next: ThemeProps): void {
    let hasChanges = false
    if (latestManifest !== next.manifest) {
      latestManifest = next.manifest
      hasChanges = true
    }
    if (os !== next.os) {
      os = next.os
      hasChanges = true
    }
    if (scheme !== next.scheme) {
      scheme = next.scheme
      hasChanges = true
    }
    if (hasChanges) {
      applyTheme()
    }
  }

  return { update }
}
