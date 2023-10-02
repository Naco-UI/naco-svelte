import type { SidebarItemProps } from '../SidebarItem/index.js'

export type SidebarMenuItem = {
  title?: string
  value: string
} & Omit<SidebarItemProps, 'selected'>

export interface SidebarMenuProps {
  items: SidebarMenuItem[]
  value?: string
}

export type SidebarMenuChangeEvent = CustomEvent<string>
