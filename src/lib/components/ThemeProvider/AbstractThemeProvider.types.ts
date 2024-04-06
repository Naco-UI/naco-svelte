export type OS = 'mac' | 'linux'
export type ColorScheme = 'light' | 'dark'

export interface AbstractThemeProviderProps {
  os: OS
  scheme: ColorScheme
}
