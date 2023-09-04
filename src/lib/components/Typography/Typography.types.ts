type TypographyVariants =
  | 'text-m'
  | 'text-l'
  | 'heading-s'
  | 'heading-m'
  | 'caption-m'
type TypographyColor = 'primary' | 'tertiary'

export interface TypographyProps {
  variant: TypographyVariants
  color: TypographyColor
  as: keyof HTMLElementTagNameMap
}
