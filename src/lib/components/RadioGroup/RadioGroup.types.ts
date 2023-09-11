import type { StackProps } from '../Stack/index.js'
import type { RadioGroupOptionProps } from './RadioGroupOption.types.js'

export type RadioGroupOption = Omit<RadioGroupOptionProps, 'name'>

export interface RadioGroupProps {
  name: string
  value: string
  disabled?: boolean
  direction?: StackProps['direction']
  options: RadioGroupOption[]
}

export type RadioGroupChangeEvent = CustomEvent<string>
