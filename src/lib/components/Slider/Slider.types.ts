import type { SliderMarkGenerator } from './fill-marks.types.js'

export interface SliderMark {
  progress: number
  title?: string
}

export interface SliderProps {
  step: number
  min: number
  max: number
  value: number
  marks?: SliderMark[] | SliderMarkGenerator
  disabled?: boolean
}

export type SliderChangeEvent = CustomEvent<number>

export interface SliderMarkPosition {
  left: string
  right: string
}
