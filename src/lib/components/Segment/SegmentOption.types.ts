export interface SegmentOptionProps {
  value: string
  title?: string
  disabled?: boolean
  selected?: boolean
}

export type SegmentChangeEvent = CustomEvent<string>
