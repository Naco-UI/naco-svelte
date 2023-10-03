import type { ThemePropValue } from './theme.types.js'

export const px = (n: ThemePropValue): string => (n ? `${n}px` : '0')
