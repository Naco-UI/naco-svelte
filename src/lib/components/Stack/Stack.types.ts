export type StackAlign = 'start' | 'end' | 'center' | 'normal'
export type StackJustify = 'space-between' | 'space-around' | StackAlign
export type StackGap = 's' | 'sl' | 'm' | 'l' | 'xs' | 'xxs' | 'none'
export type StackDirection = 'vertical' | 'horizontal'

export interface StackProps {
  align?: StackAlign
  justify?: StackJustify
  gap?: StackGap
  direction?: StackDirection
  maxWidth?: number
}
