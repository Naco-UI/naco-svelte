import type {
  PlainLayoutMacInsetParams,
  PlainLayoutToolbarParams,
} from '../PlainLayout'

export interface SidebarLayoutProps {
  hideSidebar?: boolean
  transparent?: boolean
  keepDOM?: boolean
  macInset?: PlainLayoutMacInsetParams
  toolbar?: PlainLayoutToolbarParams
  sidebarWidth?: number
}
