import { onMount } from 'svelte'

import { assertHotkey } from './assert.js'
import { parseTemplate } from './parse/index.js'

export function onHotkey(
  template: string,
  callback: (e: KeyboardEvent) => void,
  target: HTMLElement = document.body,
): void {
  if (template.length === 0) {
    return
  }
  const hotkey = parseTemplate(template)

  function handleKey(e: KeyboardEvent): void {
    if (assertHotkey(e, hotkey)) {
      e.preventDefault()
      callback(e)
    }
  }

  onMount(() => {
    target.addEventListener('keydown', handleKey)
  })
}
