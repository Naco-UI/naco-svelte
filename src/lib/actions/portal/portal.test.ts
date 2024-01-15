import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { ElementNotFoundError, portal, TargetTypeError } from './portal.action.js'

describe('portal action', () => {
  let element: HTMLDivElement
  let targetElement: HTMLDivElement

  beforeEach(() => {
    element = document.createElement('div')
    targetElement = document.createElement('div')
    targetElement.id = 'target'
    document.body.appendChild(targetElement)
  })

  afterEach(() => {
    if (targetElement.parentNode) {
      targetElement.parentNode.removeChild(targetElement)
    }
  })

  it('appends the element to the target when using a CSS selector', async () => {
    const { update } = portal(element, '#target')

    await update('#target')
    expect(targetElement.contains(element)).toBe(true)
  })

  it('appends the element to the target when using an HTMLElement', async () => {
    const { update } = portal(element, targetElement)

    await update(targetElement)
    expect(targetElement.contains(element)).toBe(true)
  })

  it('throws an error for invalid CSS selector', async () => {
    const { attached } = portal(element, '#nonexistent')
    await expect(attached).rejects.toThrowError(ElementNotFoundError)

    const { update } = portal(element, targetElement)
    await expect(update('#nonexistent')).rejects.toThrow(ElementNotFoundError)
  })

  it('throws a TypeError for invalid target type', async () => {
    const { attached } = portal(element, 123 as any)
    await expect(attached).rejects.toThrow(TargetTypeError)

    const { update } = portal(element, targetElement)
    await expect(update(true as any)).rejects.toThrow(TargetTypeError)
  })

  it('removes the element from its parent on destroy', () => {
    const { destroy } = portal(element, '#target')
    targetElement.appendChild(element)

    destroy()
    expect(targetElement.contains(element)).toBe(false)
  })
})
