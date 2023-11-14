import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

import type { LayoutContext } from './context.types'

const CONTEXT_KEY = 'naco-layout'

export function createLayoutContext(
  isInsetInitial: boolean,
  isScrolledInitial: boolean,
  layoutHeightInitial: string,
): LayoutContext {
  const isInset = writable(isInsetInitial)
  const isScrolled = writable(isScrolledInitial)
  const toolbarHeight = writable(layoutHeightInitial)

  const stores = { isInset, isScrolled, toolbarHeight }

  setContext(CONTEXT_KEY, stores)
  return stores
}

export function getLayoutContext(): LayoutContext {
  return getContext(CONTEXT_KEY)
}
