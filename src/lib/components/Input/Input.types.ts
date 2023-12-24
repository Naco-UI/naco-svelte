export interface InputProps {
  value?: string
  placeholder?: string
  borderless?: boolean
  disabled?: boolean
  autofocus?: boolean
  fullWidth?: boolean
}

export type InputChangeEvent = Event & {
  currentTarget: EventTarget & HTMLInputElement
}
