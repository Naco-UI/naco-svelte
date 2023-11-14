import type { ComponentType, SvelteComponent } from 'svelte'

export type SidebarMenuSize = 'm' | 'l'

export interface SidebarItemProps {
  selected?: boolean
  disabled?: boolean
  icon?: ComponentType<SvelteComponent>
  size?: SidebarMenuSize
}
