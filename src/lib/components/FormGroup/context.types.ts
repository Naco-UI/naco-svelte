import type { Writable } from 'svelte/store'

export interface FormContext {
  title: Writable<string | undefined>
}
