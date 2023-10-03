import type { ColorScheme, OS } from '$lib/index.js'

export type ThemePropValue = number | string | null

export type ThemeCategoryProps = Record<string, ThemePropValue>

export type ThemeCategoryTypes = 'color' | 'size' | 'effect'

export type ThemeCategories = Partial<Record<ThemeCategoryTypes, ThemeCategoryProps>>

export type ThemeDescription = ThemeCategories & {
  dark?: ThemeCategories
  light?: ThemeCategories
}

export type ThemeDescriptionTypes = 'common' | OS

export type ThemeManifest = {
  prefix: string
} & Partial<Record<ThemeDescriptionTypes, ThemeDescription>>

export type ThemeProperties = Record<string, string>

export interface ThemeProps {
  manifest: ThemeManifest
  os: OS
  scheme: ColorScheme
  debug?: boolean
}

export interface ThemeHooks {
  update: (props: ThemeProps) => void
}

export type ValueTransformer = (v: ThemePropValue) => string
