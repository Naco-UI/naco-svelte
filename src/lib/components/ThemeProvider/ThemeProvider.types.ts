export type OS = 'mac' | 'linux'
export type ColorScheme = 'light' | 'dark'

export interface ThemeProviderProps {
  os: OS
  scheme: ColorScheme
}
