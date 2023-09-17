export interface RadioProps {
  value: string
  label?: string
  disabled?: boolean
  checked?: boolean
  name: string
}

export type RadioChangeEvent = Event & {
  currentTarget: EventTarget & HTMLInputElement
}
