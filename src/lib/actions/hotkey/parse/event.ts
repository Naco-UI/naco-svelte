import type { Hotkey } from '../hotkey.types.js'

export function parseEvent(e: KeyboardEvent): Hotkey {
  return {
    key: e.key,
    alt: e.altKey,
    cmd: e.metaKey,
    ctrl: e.ctrlKey,
    shift: e.shiftKey,
  }
}
