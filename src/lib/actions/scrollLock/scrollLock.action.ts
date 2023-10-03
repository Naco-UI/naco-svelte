import { getScrollbarSize } from './getScrollBarSize.js'
import type {
  ScrollLockHooks,
  ScrollLockParams,
  ScrollLockTarget,
} from './scrollLock.types.js'

function setScrollLock(lock: boolean, target: HTMLElement): void {
  if (lock) {
    target.style.paddingRight = `${getScrollbarSize(target)}px`
    target.style.overflow = 'hidden'
  } else {
    target.style.overflow = ''
    target.style.paddingRight = ''
  }
}

function getTarget(target: ScrollLockTarget): HTMLElement {
  if (typeof target === 'string') {
    const targetNode = document.querySelector<HTMLElement>(target)
    if (targetNode) {
      return targetNode
    } else {
      throw new Error(`Requested target is not found: "${target}"`)
    }
  } else {
    return target
  }
}

export function scrollLock(
  _: HTMLElement,
  { target = document.body, lock }: ScrollLockParams,
): ScrollLockHooks {
  let targetEl = getTarget(target)
  setScrollLock(lock, targetEl)

  function update(params: ScrollLockParams): void {
    if (params.target) {
      targetEl = getTarget(params.target)
    }
    if (!params.lock) {
      if (params.unlockDelay) {
        setTimeout(() => {
          setScrollLock(false, targetEl)
        }, params.unlockDelay)
      } else {
        setScrollLock(false, targetEl)
      }
    } else {
      setScrollLock(true, targetEl)
    }
  }
  function destroy(): void {
    setScrollLock(false, targetEl)
  }

  return {
    update,
    destroy,
  }
}
