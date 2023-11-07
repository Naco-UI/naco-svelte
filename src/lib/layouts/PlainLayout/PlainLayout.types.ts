export interface PlainLayoutMacInsetParams {
  show?: boolean
  safePadding?: boolean
  draggable?: boolean
  title?: string
  animateToolbar?: boolean
}

export interface PlainLayoutToolbarParams {
  show?: boolean
  height?: number
  transparent?: boolean
}

export interface PlainLayoutProps {
  transparent?: boolean
  macInset?: PlainLayoutMacInsetParams
  toolbar?: PlainLayoutToolbarParams
}
