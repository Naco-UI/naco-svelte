type ButtonVariant = 'primary' | 'default' | 'danger'

type ButtonColor = 'default' | 'accent' | 'warning' | 'error' | 'success'

export interface ButtonProps {
  variant?: ButtonVariant
  color?: ButtonColor
  fullWidth?: boolean
  disabled?: boolean
  hotkey: string
  sizeMac: 's' | 'm'
}
