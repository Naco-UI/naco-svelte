import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

import type { ToolbarContext } from './context.types'

const CONTEXT_KEY = 'naco-toolbar'

export function createToolbarContext(
  insetInitial: boolean,
  scrolledInitial: boolean,
): ToolbarContext {
  const inset = writable(insetInitial)
  const scrolled = writable(scrolledInitial)

  const stores = { inset, scrolled }

  setContext(CONTEXT_KEY, stores)
  return stores
}

export function getToolbarContext(): ToolbarContext {
  return getContext(CONTEXT_KEY)
}
