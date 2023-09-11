import { tick } from 'svelte'

import type { PortalHooks, PortalTarget } from './portal-action.types.js'

function formatError(target: any): string {
  const targetType = target === null ? 'null' : typeof target
  return `Unknown portal target type: ${targetType}. Allowed types: string (CSS selector) or HTMLElement.`
}

/**
 * Places element to target
 * Usage: <div use:portal={'css selector'}> or <div use:portal={document.body}>
 */
export function portal(el: HTMLElement, target: PortalTarget = 'body'): PortalHooks {
  let targetEl
  async function update(newTarget: PortalTarget): Promise<void> {
    target = newTarget
    if (typeof target === 'string') {
      targetEl = document.querySelector(target)
      if (targetEl === null) {
        await tick()
        targetEl = document.querySelector(target)
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`)
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target
    } else {
      throw new TypeError(formatError(target))
    }
    targetEl.appendChild(el)
    el.hidden = false
  }

  function destroy(): void {
    if (el.parentNode) {
      el.parentNode.removeChild(el)
    }
  }

  update(target)
  return {
    update,
    destroy,
  }
}
