import type { ThemeManifest } from '$lib/actions/theme/theme.types.js'

export const manifest: ThemeManifest = {
  prefix: 'form-row',
  common: {
    color: {
      backgroundActive: 'var(--color-background-quaternary)',
      line: 'var(--color-border-dimmed)',
    },
    size: {
      paddingHorizontal: 'var(--form-group-padding-horizontal)',
      paddingVertical: 'var(--form-group-padding-vertical)',
    },
  },
  mac: {
    color: {
      backgroundHover: null,
    },
    size: {
      minHeight: 20,
    },
    effect: {
      transition: null,
    },
  },
  linux: {
    color: {
      backgroundHover: 'var(--color-background-tertiary)',
    },
    size: {
      minHeight: 34,
    },
    effect: {
      transition: 'var(--transition-default)',
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
