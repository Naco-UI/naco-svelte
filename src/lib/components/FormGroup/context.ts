import { getContext, hasContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

import type { FormContext } from './context.types.js'
import type { FormGroupProps } from './FormGroup.types.js'

const contextName = 'form'

export function createFormContext({ title }: FormGroupProps): FormContext {
  const stores = {
    title: writable(title),
  }

  setContext(contextName, stores)
  return stores
}

export function isForm(): boolean {
  return hasContext(contextName)
}

export function getForm(): FormContext {
  return getContext(contextName)
}
