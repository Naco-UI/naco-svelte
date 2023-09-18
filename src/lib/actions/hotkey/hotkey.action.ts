import { isHotkey } from './isHotkey.js'
import { parseTemplate } from './parse.js'
import type { Hotkey, HotkeyHooks } from './types.js'

export function hotkey(el: HTMLElement, template: string): HotkeyHooks {
  let hotkey: Hotkey = parseTemplate(template)

  function handleKey(e: KeyboardEvent): void {
    if (isHotkey(e, hotkey)) {
      e.preventDefault()
      el.click()
    }
  }

  window.addEventListener('keydown', handleKey)

  async function update(newTemplate: string): Promise<void> {
    hotkey = parseTemplate(newTemplate)
  }
  function destroy(): void {
    window.removeEventListener('keydown', handleKey)
  }

  return {
    update,
    destroy,
  }
}
