import { writable } from 'svelte/store'

import type {
  EventProvider,
  FromEvent,
  FromEventOptions,
  FromMatchMedia,
} from './fromEvent.types'

/**
 * Creates a Svelte readable and writable store based on an event from an event provider.
 * @param element - The event provider, typically a DOM element or similar object with addEventListener and removeEventListener methods.
 * @param type - The type of event to listen for (e.g., 'click', 'change').
 * @param options - Optional configuration for the event listener.
 * @returns {FromEvent<ReturnType>} - A tuple containing a Svelte readable store with the event data and a writable store to control the active state of the event listener.
 */
export function fromEvent<ReturnType = Event>(
  element: EventProvider,
  type: string,
  options?: FromEventOptions<ReturnType>,
): FromEvent<ReturnType> {
  const value = writable<ReturnType>(options?.initial)
  const active = writable(!options?.startsInactive)

  const setValueFromEvent = (event: any): void => {
    const mapEvent = options?.map
    if (mapEvent) {
      value.set(mapEvent(event))
    } else {
      value.set(event)
    }
  }

  active.subscribe((isActive) => {
    const eventArgs: [string, any] = [type, setValueFromEvent]
    if (isActive) {
      element.addEventListener(...eventArgs)
    } else {
      element.removeEventListener(...eventArgs)
    }
  })

  return [value, active]
}

/**
 * Creates a Svelte readable and writable store based on a MediaQueryList and its change events.
 * The store emits a boolean indicating whether the media query matches. Additionally, returns the MediaQueryList object.
 *
 * @param {string} query - The media query string to be observed (e.g., '(min-width: 600px)').
 * @returns {FromMatchMedia} A tuple containing a Svelte readable store with a boolean indicating the match state of the media query, a writable store to control the active state of the media query listener, and the MediaQueryList object itself.
 */
export function fromMatchMedia(query: string): FromMatchMedia {
  const queryList = window.matchMedia(query)
  return [
    ...fromEvent(queryList, 'change', {
      map: (e: MediaQueryListEvent) => e.matches,
      initial: queryList.matches,
    }),
    queryList,
  ]
}
