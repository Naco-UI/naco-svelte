import type { StackAlign, StackGap, StackJustify } from '../Stack'

export type ToolbarBorderBehavior = 'static' | 'hidden' | 'scroll'

export type ToolbarPaddingVariant = 'default' | 'form' | 'none'

export interface ToolbarProps {
  height?: number | string
  transparent?: boolean
  border?: ToolbarBorderBehavior
  draggable?: boolean
  justify?: StackJustify
  align?: StackAlign
  gap?: StackGap
  padding?: ToolbarPaddingVariant
  insetSafe?: boolean
}
