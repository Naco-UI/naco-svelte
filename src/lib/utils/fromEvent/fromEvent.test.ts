import { get } from 'svelte/store'
import { afterAll, describe, expect, it, vi } from 'vitest'

import { fromEvent, fromMatchMedia } from './fromEvent'

describe('fromEvent', () => {
  it('adds and removes event listeners correctly', () => {
    const mockAddEventListener = vi.fn()
    const mockRemoveEventListener = vi.fn()
    const mockProvider = {
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
    }

    const [, active] = fromEvent(mockProvider, 'testEvent')

    // Simulating deactivation
    active.set(false)
    expect(mockRemoveEventListener).toHaveBeenCalled()

    // Simulating activation
    active.set(true)
    expect(mockAddEventListener).toHaveBeenCalled()
  })

  it('provides raw event if mapper is not provided', () => {
    const eventType = 'testEvent'

    const [event] = fromEvent(document, eventType)
    expect(get(event)).toBeUndefined()

    document.dispatchEvent(new Event(eventType))
    expect(get(event).type).toEqual(eventType)
  })

  it('provides mapped value if mapper is provided', () => {
    const eventType = 'testEvent'
    const eventDataFirst = 'first value'
    const eventDataSecond = 'second value'
    const eventDataThird = 'third value'

    const eventWith = (detail: string): CustomEvent<string> =>
      new CustomEvent(eventType, { detail })

    const [event] = fromEvent(document, eventType, {
      map: (e: CustomEvent<string>) => e.detail,
    })
    expect(get(event)).toBeUndefined()

    document.dispatchEvent(eventWith(eventDataFirst))
    expect(get(event)).toEqual(eventDataFirst)

    document.dispatchEvent(eventWith(eventDataSecond))
    expect(get(event)).toEqual(eventDataSecond)

    document.dispatchEvent(eventWith(eventDataThird))
    expect(get(event)).toEqual(eventDataThird)
  })

  it('updates event value correctly', () => {
    const value = 'TEST_VALUE'
    const testEvent = { test: value }
    const mockProvider = {
      addEventListener: (_: any, listener: any) => listener(testEvent),
      removeEventListener: vi.fn(),
    }

    const [eventValue] = fromEvent(mockProvider, 'testEvent', {
      map: (e) => e.test,
    })

    const unsubscribe = eventValue.subscribe((v) => {
      expect(v).toBe(value)
    })
    afterAll(unsubscribe)
  })
})

describe('fromMatchMedia', () => {
  it('responds to media query changes', () => {
    const darkQuery = '(prefers-color-scheme: dark)'

    const [isDark, , queryList] = fromMatchMedia(darkQuery)
    const currentValue = queryList.matches
    expect(get(isDark)).toBe(currentValue)

    queryList.dispatchEvent(
      new MediaQueryListEvent('change', {
        matches: !currentValue,
        media: darkQuery,
      }),
    )
    expect(get(isDark)).toBe(!currentValue)
  })
})
