import type { Writable } from 'svelte/store'

export interface ToolbarContext {
  inset: Writable<boolean>
  scrolled: Writable<boolean>
}
