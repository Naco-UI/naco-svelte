import type { Writable } from 'svelte/store'

export interface LayoutContext {
  isInset: Writable<boolean>
  isScrolled: Writable<boolean>
  toolbarHeight: Writable<string>
}
