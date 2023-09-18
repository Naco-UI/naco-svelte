import type { Hotkey } from './types.js'

export function isHotkey(e: KeyboardEvent, hotkey: Hotkey): boolean {
  if (hotkey.alt && !e.altKey) {
    return false
  }
  if (hotkey.shift && !e.shiftKey) {
    return false
  }
  if (hotkey.meta && !(e.ctrlKey || e.metaKey)) {
    return false
  }
  return e.key === hotkey.key || e.code === hotkey.key
}
