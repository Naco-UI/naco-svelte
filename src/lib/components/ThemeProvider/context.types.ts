import type { Writable } from 'svelte/store'

import type { ColorScheme, OS } from './ThemeProvider.types.js'

export interface ThemeContext {
  os: Writable<OS>
  scheme: Writable<ColorScheme>
}
