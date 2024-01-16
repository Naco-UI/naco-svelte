import type { ScrollLockTarget } from './scrollLock.types'

/**
 * Calculates the size of the scrollbar for a given HTML element.
 * If no element is provided, it defaults to the document body.
 *
 * The size is determined by the difference in width between the element's offsetWidth and
 * its scrollWidth, or in the case of the document body, between the window's innerWidth and the body's offsetWidth.
 *
 * @param {HTMLElement} - The element for which to calculate the scrollbar size.
 * @returns {number} The calculated scrollbar size in pixels.
 */
export function getScrollbarSize(el: HTMLElement): number {
  if (el === document.body) {
    return window.innerWidth - el.offsetWidth
  }
  return el.offsetWidth - el.scrollWidth
}

/**
 * Sets or removes the scroll lock on a specified target element.
 * @param {boolean} lock - Determines whether to apply or remove the scroll lock.
 * @param {HTMLElement} target - The target element to apply the scroll lock to.
 */
export function setScroll(lock: boolean, target: HTMLElement): void {
  target.style.overflow = lock ? 'hidden' : ''
  target.style.paddingRight = lock ? `${getScrollbarSize(target)}px` : ''
}

/**
 * Resolves the target element from a string selector or an HTMLElement.
 * @param {ScrollLockTarget} target - The target selector or HTMLElement.
 * @returns {HTMLElement} The resolved target element.
 * @throws Will throw an error if the target element cannot be found.
 */
export function getTargetElement(target: ScrollLockTarget): HTMLElement {
  if (typeof target === 'string') {
    const targetNode = document.querySelector<HTMLElement>(target)
    if (!targetNode) {
      throw new TargetNotFoundError(target)
    }
    return targetNode
  }
  return target
}

/**
 * Custom error class to handle target not found scenarios.
 * This error is specifically used in scenarios where a target element for
 * the scroll lock functionality is not found in the DOM.
 */
export class TargetNotFoundError extends Error {
  constructor(selector: string) {
    super(`Requested scroll lock target is not found: "${selector}"`)
  }
}
