import type { ToolbarProps } from '$lib/components/Toolbar'

export interface PlainLayoutMacInsetParams {
  enable?: boolean
  title?: string
}

export type PlainLayoutToolbarParams = ToolbarProps & {
  show?: boolean
}

export interface PlainLayoutProps {
  transparent?: boolean
  macInset?: PlainLayoutMacInsetParams
  toolbar?: PlainLayoutToolbarParams
}
