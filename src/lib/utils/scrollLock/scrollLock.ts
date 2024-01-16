import { get, type Readable } from 'svelte/store'

import type { ScrollLockDestroy, ScrollLockTarget } from './scrollLock.types'
import { getTargetElement, setScroll } from './utils'

/**
 * Initializes a scroll lock on a specified target element, controlled by a Svelte store.
 *
 * The function subscribes to a Svelte store representing the lock state (true for locked, false for unlocked)
 * and applies or removes the scroll lock on the target element based on this state. It returns a `destroy` function
 * which, when called, will clean up the scroll lock and unsubscribe from the store.
 *
 * @param {ScrollLockTarget} target - The target element or a selector string for applying the scroll lock.
 * @param {Readable<boolean>} lock - A Svelte readable store that controls the lock state.
 * @returns {ScrollLockDestroy} A function that cleans up the scroll lock and unsubscribes from the store.
 */
export function scrollLock(
  target: ScrollLockTarget,
  lock: Readable<boolean>,
): ScrollLockDestroy {
  const element = getTargetElement(target)

  const setElementScroll = (isLocked: boolean): void => setScroll(isLocked, element)
  const unsubscribe = lock.subscribe((isLocked) => setElementScroll(isLocked))

  function destroy(): void {
    if (get(lock)) {
      setElementScroll(false)
    }
    unsubscribe()
  }

  return destroy
}
