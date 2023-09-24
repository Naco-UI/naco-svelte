export interface RadioProps {
  value: string
  name: string
  label?: string
  disabled?: boolean
  checked?: boolean
}

export type RadioChangeEvent = Event & {
  currentTarget: EventTarget & HTMLInputElement
}
