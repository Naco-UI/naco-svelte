import type { SliderMarkGenerator, SliderMarkMapping } from './fill-marks.types.js'
import type { SliderMark } from './Slider.types.js'

export function fillMarks(
  count: number,
  mapping: SliderMarkMapping = {},
): SliderMarkGenerator {
  return (min, max) => {
    const step = (max - min) / (count - 1)
    const marks = Array<SliderMark>(count)
    for (let i = 0; i < count; i++) {
      const value = step * i
      const title = mapping[i + 1]
      marks[i] = {
        progress: value / max,
        title,
      }
    }
    return marks
  }
}
