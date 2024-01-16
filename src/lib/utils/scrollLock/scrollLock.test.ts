import { writable } from 'svelte/store'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { scrollLock } from './scrollLock'
import { getTargetElement, setScroll, TargetNotFoundError } from './utils'

describe('setScrollLock', () => {
  let element: HTMLDivElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('applies scroll lock to an element', () => {
    setScroll(true, element)
    expect(element.style.overflow).toBe('hidden')
    expect(element.style.paddingRight).toBe('0px')
  })

  it('removes scroll lock from an element', () => {
    setScroll(false, element)
    expect(element.style.overflow).toBe('')
    expect(element.style.paddingRight).toBe('')
  })
})

describe('getTargetElement', () => {
  it('resolves an HTMLElement target directly', () => {
    const element = document.createElement('div')
    const resolvedElement = getTargetElement(element)
    expect(resolvedElement).toBe(element)
  })

  it('resolves a string target to an HTMLElement', () => {
    const element = document.createElement('div')
    element.id = 'testElement'
    document.body.appendChild(element)
    vi.spyOn(document, 'querySelector').mockReturnValue(element)

    const resolvedElement = getTargetElement('#testElement')
    expect(resolvedElement).toBe(element)

    document.body.removeChild(element)
    vi.restoreAllMocks()
  })

  it('throws an error for a non-existent string target', () => {
    vi.spyOn(document, 'querySelector').mockReturnValue(null)
    expect(() => getTargetElement('#nonexistent')).toThrow(TargetNotFoundError)
    vi.restoreAllMocks()
  })
})

describe('scrollLock action', () => {
  let element: HTMLDivElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('initializes with unlocked state', () => {
    const lock = writable(false)
    const unlock = scrollLock('body', lock)
    expect(document.body.style.overflow).toEqual('')
    unlock()
  })

  it('initializes with locked state', () => {
    const lock = writable(true)
    const unlock = scrollLock('body', lock)
    expect(document.body.style.overflow).toEqual('hidden')
    unlock()
  })

  it('toggles scroll lock state', async () => {
    const lock = writable(false)
    const unlock = scrollLock('body', lock)
    expect(document.body.style.overflow).toEqual('')

    lock.set(true)
    expect(document.body.style.overflow).toBe('hidden')

    lock.set(false)
    expect(document.body.style.overflow).toBe('')

    unlock()
  })

  it('cleans up correctly on destroy', () => {
    const lock = writable(true)
    const destroy = scrollLock('body', lock)
    expect(document.body.style.overflow).toBe('hidden')

    destroy()
    expect(document.body.style.overflow).toBe('')
  })
})
