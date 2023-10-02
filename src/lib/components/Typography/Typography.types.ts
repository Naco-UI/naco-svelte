export type TypographyVariants =
  | 'caption-s'
  | 'caption-m'
  | 'caption-l'
  | 'text-s'
  | 'text-m'
  | 'text-l'
  | 'heading-s'
  | 'heading-m'
export type TypographyColor = 'primary' | 'tertiary' | 'white' | 'inherit'
export type TypographyAlign = 'left' | 'right' | 'center'

export interface TypographyProps {
  variant?: TypographyVariants
  color?: TypographyColor
  as?: keyof HTMLElementTagNameMap
  fullWidth?: boolean
  align?: TypographyAlign
  selection?: boolean
}
