import type { ThemeManifest } from '$lib/actions/theme/theme.types.js'

export const manifest: ThemeManifest = {
  prefix: 'backdrop',
  common: {
    color: {
      background: 'var(--color-background-overlay)',
    },
  },
}
