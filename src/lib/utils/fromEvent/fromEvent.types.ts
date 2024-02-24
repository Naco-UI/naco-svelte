import type { Readable, Writable } from 'svelte/store'

export type FromEvent<T> = [Readable<T>, Writable<boolean>]

export type FromMatchMedia = [...FromEvent<boolean>, MediaQueryList]

export interface EventProvider {
  addEventListener: (...args: any[]) => any
  removeEventListener: (...args: any[]) => any
}

export type EventMapper<ReturnType, EventType = any> = (
  event: EventType,
) => ReturnType

export interface FromEventOptions<ReturnType> {
  initial?: ReturnType
  map?: EventMapper<ReturnType>
  startsInactive?: boolean
}
