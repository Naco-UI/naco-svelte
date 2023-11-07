import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

import type { LayoutContext } from './context.types'

const CONTEXT_KEY = 'naco-layout'

export function createLayoutContext(
  insetInitial: boolean,
  scrolledInitial: boolean,
): LayoutContext {
  const inset = writable(insetInitial)
  const scrolled = writable(scrolledInitial)

  const stores = { inset, scrolled }

  setContext(CONTEXT_KEY, stores)
  return stores
}

export function getLayoutContext(): LayoutContext {
  return getContext(CONTEXT_KEY)
}
