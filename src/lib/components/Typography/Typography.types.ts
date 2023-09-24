type TypographyVariants =
  | 'caption-s'
  | 'caption-m'
  | 'text-s'
  | 'text-m'
  | 'text-l'
  | 'heading-s'
  | 'heading-m'
  | 'caption-m'
type TypographyColor = 'primary' | 'tertiary'
type TypographyAlign = 'left' | 'right' | 'center'

export interface TypographyProps {
  variant?: TypographyVariants
  color?: TypographyColor
  as?: keyof HTMLElementTagNameMap
  fullWidth?: boolean
  align?: TypographyAlign
  select?: boolean
}
