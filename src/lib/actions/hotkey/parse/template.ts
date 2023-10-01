import type { Hotkey } from '../hotkey.types.js'

export function parseTemplate(template: string): Hotkey {
  const keys = template.replace(/ /g, '').split('+')
  const hotkey: Hotkey = {
    ctrl: false,
    alt: false,
    shift: false,
    cmd: false,
    key: '',
  }
  for (let i = 0; i < keys.length; i++) {
    switch (keys[i]) {
      case 'cmd':
        hotkey.cmd = true
        break
      case 'ctrl':
        hotkey.ctrl = true
        break
      case 'alt':
        hotkey.alt = true
        break
      case 'shift':
        hotkey.shift = true
        break
      default:
        hotkey.key = keys[i]
    }
  }
  return hotkey
}
