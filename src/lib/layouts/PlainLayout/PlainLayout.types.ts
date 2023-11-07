export interface PlainLayoutMacInsetParams {
  show?: boolean
  safePadding?: boolean
  draggable?: boolean
  title?: string
}

export interface PlainLayoutToolbarParams {
  show?: boolean
  height?: number
  transparent?: boolean
  animate?: boolean
}

export interface PlainLayoutProps {
  transparent?: boolean
  macInset?: PlainLayoutMacInsetParams
  toolbar?: PlainLayoutToolbarParams
}
