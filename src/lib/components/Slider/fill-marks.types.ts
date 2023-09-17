import type { SliderMark } from './Slider.types.js'

export type SliderMarkMapping = Record<number, string>

export type SliderMarkGenerator = (min: number, max: number) => SliderMark[]
