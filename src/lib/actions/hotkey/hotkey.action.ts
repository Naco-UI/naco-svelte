import { assertHotkey } from './assert.js'
import type { Hotkey, HotkeyHooks } from './hotkey.types.js'
import { parseTemplate } from './parse/index.js'

export function hotkey(el: HTMLElement, template: string): HotkeyHooks {
  let hotkey: Hotkey = parseTemplate(template)

  function handleKey(e: KeyboardEvent): void {
    if (assertHotkey(e, hotkey)) {
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
