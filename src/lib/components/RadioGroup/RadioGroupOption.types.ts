export interface RadioGroupOptionProps {
  value: string
  title?: string
  disabled?: boolean
  checked?: boolean
  name: string
}

export type RadioGroupOptionChangeEvent = Event & {
  currentTarget: EventTarget & HTMLInputElement
}
