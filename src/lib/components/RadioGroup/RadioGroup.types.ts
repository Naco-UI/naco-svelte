import type { RadioProps } from '../Radio/Radio.types.js'
import type { StackProps } from '../Stack/index.js'

export type RadioGroupOption = Omit<RadioProps, 'name'>

export interface RadioGroupProps {
  name: string
  value: string
  disabled?: boolean
  direction?: StackProps['direction']
  options: RadioGroupOption[]
}

export type RadioGroupChangeEvent = CustomEvent<string>
