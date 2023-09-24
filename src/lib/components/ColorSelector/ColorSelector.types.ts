export interface ColorSelectorProps {
  name?: string
  index?: number
  value?: string
  disabled?: boolean
  primaryProp: 'index' | 'value'
  options: string[]
}

export type ColorSelectorChangeEvent = CustomEvent<{
  value: string
  index: number
}>
