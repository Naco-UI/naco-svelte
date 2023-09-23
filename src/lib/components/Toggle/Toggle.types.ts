// TODO: Remove from props, use FormGroup context
type ToggleSizeMac = 's' | 'm'

export interface ToggleProps {
  checked?: boolean
  sizeMac?: ToggleSizeMac
  disabled?: boolean
}

export type ToggleChangeEvent = CustomEvent<boolean>
