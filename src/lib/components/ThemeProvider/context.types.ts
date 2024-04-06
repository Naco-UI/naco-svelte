import type { Writable } from 'svelte/store'

import type { ColorScheme, OS } from './AbstractThemeProvider.types'

export interface ThemeContext {
  os: Writable<OS>
  scheme: Writable<ColorScheme>
}
