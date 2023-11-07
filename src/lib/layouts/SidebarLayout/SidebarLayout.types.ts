import type {
  PlainLayoutMacInsetParams,
  PlainLayoutToolbarParams,
} from '../PlainLayout'

export interface SidebarLayoutProps {
  hideSidebar?: boolean
  transparent?: boolean
  keepDOM?: boolean
  macInset?: Pick<PlainLayoutMacInsetParams, 'show' | 'title'>
  toolbar?: PlainLayoutToolbarParams
  sidebarWidth?: number
}
