import type { Hotkey } from './types.js'

export function parseEvent(e: KeyboardEvent): Hotkey {
  return {
    key: e.key,
    alt: e.altKey,
    meta: e.ctrlKey || e.metaKey,
    shift: e.shiftKey,
  }
}

export function parseTemplate(template: string): Hotkey {
  const keys = template.replace(/ /g, '').split('+')
  let meta = false
  let alt = false
  let shift = false
  let key = ''
  for (let i = 0; i < keys.length; i++) {
    switch (keys[i]) {
      case 'cmd':
      case 'ctrl':
        meta = true
        break
      case 'alt':
        alt = true
        break
      case 'shift':
        shift = true
        break
      default:
        key = keys[i]
    }
  }
  return {
    key,
    alt,
    shift,
    meta,
  }
}
