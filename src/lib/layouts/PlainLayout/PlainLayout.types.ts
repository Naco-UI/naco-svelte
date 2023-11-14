import type { ToolbarProps } from '$lib/components/Toolbar'

export interface PlainLayoutMacInsetParams {
  enable?: boolean
  title?: string
}

export type PlainLayoutToolbarParams = ToolbarProps & {
  show?: boolean
  height?: number | string
}

export interface PlainLayoutProps {
  transparent?: boolean
  macInset?: PlainLayoutMacInsetParams
  toolbar?: PlainLayoutToolbarParams
}
