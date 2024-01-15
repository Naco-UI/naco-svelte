import { tick } from 'svelte'

import type { PortalHooks, PortalTarget } from './portal.types.js'

/**
 * Places element to target
 * Usage: <div use:portal={'css selector'}> or <div use:portal={document.body}>
 */
export function portal(el: HTMLElement, target: PortalTarget = 'body'): PortalHooks {
  let lastTarget: HTMLElement
  async function update(t: PortalTarget): Promise<void> {
    await tick()
    const targetElement = getTargetElement(t)
    if (!lastTarget) {
      lastTarget = targetElement
    } else if (lastTarget !== targetElement) {
      lastTarget.removeChild(el)
    }
    targetElement.appendChild(el)
    lastTarget = targetElement
    el.hidden = false
  }

  function destroy(): void {
    if (el.parentNode) {
      el.parentNode.removeChild(el)
    }
  }

  const attached = update(target)
  return {
    update,
    destroy,
    attached,
  }
}

export class TargetTypeError extends TypeError {
  constructor(target: any) {
    const targetType = target === null ? 'null' : typeof target
    super(`Unknown portal target type: ${targetType}.
    Allowed types: string (CSS selector) or HTMLElement.`)
  }
}

export class ElementNotFoundError extends Error {
  constructor(selector: string) {
    super(`No element found matching css selector: "${selector}"`)
  }
}

function getTargetElement(t: PortalTarget): HTMLElement {
  if (typeof t === 'string') {
    const element = document.querySelector<HTMLElement>(t)
    if (element === null) {
      throw new ElementNotFoundError(t)
    }
    return element
  } else if (t instanceof HTMLElement) {
    return t
  }
  throw new TargetTypeError(t)
}
