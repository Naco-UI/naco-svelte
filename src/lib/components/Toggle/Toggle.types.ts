export type ToggleSizeMac = 's' | 'm'

export interface ToggleProps {
  checked?: boolean
  disabled?: boolean
}

export type ToggleChangeEvent = CustomEvent<boolean>
