import type { Writable } from 'svelte/store'

export interface LayoutContext {
  inset: Writable<boolean>
  scrolled: Writable<boolean>
}
