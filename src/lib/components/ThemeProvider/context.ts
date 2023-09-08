import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

import type { ThemeContext } from './context.types.js'
import type { ThemeProviderProps } from './ThemeProvider.types.js'

export function createThemeContext(initialState: ThemeProviderProps): ThemeContext {
  const os = writable(initialState.os)
  const scheme = writable(initialState.scheme)

  const stores = { os, scheme }

  setContext('naco', stores)
  return stores
}

export function useTheme(): ThemeContext {
  return getContext('naco')
}
