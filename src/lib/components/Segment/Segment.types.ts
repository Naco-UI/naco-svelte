import type { SegmentOptionProps } from './SegmentOption.types.js'

export interface SegmentProps {
  options: SegmentOptionProps[]
  disabled: boolean
  value: string
}
