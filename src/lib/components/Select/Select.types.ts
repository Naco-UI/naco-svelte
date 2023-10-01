export interface SelectOption {
  value: string
  title?: string
  disabled?: boolean
}

export interface SelectProps {
  value?: string
  options: SelectOption[]
  disabled?: boolean
  transparent?: boolean
}
