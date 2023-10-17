import type { ComponentType, SvelteComponent } from 'svelte'

export interface SidebarItemProps {
  selected?: boolean
  disabled?: boolean
  icon?: ComponentType<SvelteComponent>
}
