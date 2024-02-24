import type { ThemeManifest } from '$lib/actions/theme/theme.types.js'

export const manifest: ThemeManifest = {
  prefix: 'input',
  common: {
    color: {
      text: 'var(--color-content-primary)',
      background: 'var(--color-background-elevated)',
    },
  },
}

// --input-color-text: ;
// --input-color-background: ;
// --input-border-radius: var(--border-radius-m);
// --input-border: none;
// --input-outline: 0 solid transparent;
// --input-box-shadow: 0 0 0 transparent;
// --input-background: transparent;
// --input-padding: 0;
