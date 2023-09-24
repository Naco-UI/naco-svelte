type StackAlign = 'start' | 'end' | 'center' | 'normal'
type StackJustify = 'space-between' | 'space-around' | StackAlign
type StackGap = 's' | 'm' | 'l' | 'xs'
type StackDirection = 'vertical' | 'horizontal'

export interface StackProps {
  align?: StackAlign
  justify?: StackJustify
  gap?: StackGap
  direction?: StackDirection
  maxWidth?: number
}
