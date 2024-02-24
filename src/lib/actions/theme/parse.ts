import type { ColorScheme } from '$lib/index.js'

import type {
  ThemeCategories,
  ThemeCategoryProps,
  ThemeCategoryTypes,
  ThemeDescription,
  ThemeProperties,
  ValueTransformer,
} from './theme.types.js'
import { px } from './theme-utils.js'
import { camelToSnakeCase, mergeProps } from './utils.js'

const categoryTransformers: Partial<Record<ThemeCategoryTypes, ValueTransformer>> = {
  size: (v) => (typeof v === 'string' ? v : px(v)),
}

const defaultTransofrmer = (v: any): string => `${v}`

function getTransformer(category: string): ValueTransformer {
  const transform =
    categoryTransformers[category as keyof typeof categoryTransformers]
  return transform ?? defaultTransofrmer
}

function parseCategory(
  category: ThemeCategoryProps,
  prefix: string,
): Record<string, string> {
  const result: Record<string, string> = {}
  const stringify = getTransformer(prefix)
  for (const key in category) {
    const value = category[key as keyof ThemeCategories]
    if (!value && value) continue
    const targetKey = `${prefix}-${camelToSnakeCase(key)}`
    if (value === null) {
      result[targetKey] = ''
      continue
    }
    result[targetKey] = stringify(value)
  }
  return result
}

export function parseProps(
  description: ThemeDescription,
  scheme: ColorScheme,
): ThemeProperties {
  const props: ThemeProperties = {}
  for (const category in description) {
    if (category === 'dark' || category === 'light') {
      const subcategory = description[category]
      if (category !== scheme || !subcategory) {
        continue
      }
      for (const key in subcategory) {
        const subcategoryProps = subcategory[
          key as ThemeCategoryTypes
        ] as ThemeCategoryProps
        mergeProps(props, parseCategory(subcategoryProps, key))
      }
      continue
    }
    const categoryProps = description[
      category as ThemeCategoryTypes
    ] as ThemeCategoryProps
    mergeProps(props, parseCategory(categoryProps, category))
  }
  return props
}
