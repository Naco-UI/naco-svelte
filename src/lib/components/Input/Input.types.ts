export interface InputProps {
  value?: string
  placeholder?: string
  borderless?: boolean
  disabled?: boolean
  autofocus?: boolean
}

export type InputChangeEvent = Event & {
  currentTarget: EventTarget & HTMLInputElement
}
