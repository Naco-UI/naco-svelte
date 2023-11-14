import type { SidebarItemProps, SidebarMenuSize } from '../SidebarItem/index.js'

export type SidebarMenuItem = {
  title?: string
  value: string
} & Omit<SidebarItemProps, 'selected' | 'size'>

export interface SidebarMenuProps {
  items: SidebarMenuItem[]
  value?: string
  size?: SidebarMenuSize
}

export type SidebarMenuChangeEvent = CustomEvent<string>
