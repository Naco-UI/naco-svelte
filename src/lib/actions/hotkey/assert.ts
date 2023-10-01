import type { Hotkey } from './hotkey.types.js'
import { isMac } from './mac.js'

export function assertHotkey(e: KeyboardEvent, hotkey: Hotkey): boolean {
  if (hotkey.alt && !e.altKey) {
    return false
  }
  if (hotkey.shift && !e.shiftKey) {
    return false
  }
  if (hotkey.cmd) {
    if (isMac && !e.metaKey) {
      return false
    } else if (!isMac && !e.ctrlKey) {
      return false
    }
  }
  if (hotkey.ctrl) {
    if (hotkey.cmd && !isMac) {
      throw new Error('cmd and ctrl combination is only available on macOS')
    }
    if (!e.ctrlKey) {
      return false
    }
  }
  return e.key === hotkey.key || e.code === hotkey.key
}
