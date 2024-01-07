import type { ThemeManifest } from '$lib/actions/theme/theme.types.js'

export const manifest: ThemeManifest = {
  prefix: 'toggle',
  common: {
    color: {
      knob: '#fff',
      track: 'var(--color-background-tertiary)',
      trackBorder: 'var(--color-border-secondary)',
      trackSelected: 'var(--color-content-accent)',
    },
    size: {
      formWidth: null,
      formHeight: null,
    },
    effect: {
      shadowFormKnob: null,
      opacity: 1,
    },
  },
  mac: {
    size: {
      width: 40,
      height: 22,
      formWidth: 26,
      formHeight: 15,
    },
    effect: {
      shadowTrack: '0 2px 2px 0 rgb(0 0 0 / 5%) inset',
      shadowKnob: '0 0.5px 4px rgb(0 0 0 / 20%)',
      shadowFormKnob: '0 0.5px 1px rgb(0 0 0 / 20%)',
    },
    dark: {
      effect: {
        opacity: 0.85,
      },
    },
  },
  linux: {
    size: {
      width: 50,
      height: 26,
    },
    effect: {
      shadowTrack: '0 2px 20px 0 rgb(0 0 0 / 5%) inset',
      shadowKnob: '0 2px 2px rgb(0 0 0 / 5%)',
    },
  },
}
