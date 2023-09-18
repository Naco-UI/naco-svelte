type StackAlign = 'start' | 'end' | 'center' | 'normal'

export interface StackProps {
  align: StackAlign
  justify: 'space-between' | 'space-around' | StackAlign
  gap: 's' | 'm' | 'l' | 'xs'
  direction: 'vertical' | 'horizontal'
  maxWidth: number
}
