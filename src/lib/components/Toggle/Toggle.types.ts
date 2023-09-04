export interface ToggleProps {
  checked: boolean
  sizeMac: 's' | 'm'
  disabled: boolean
}

export type ToggleChangeEvent = CustomEvent<boolean>
