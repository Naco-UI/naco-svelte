export interface Hotkey {
  key: string
  alt: boolean
  shift: boolean
  /**
   * CTRL on Linux and Windows, CMD on macOS
   */
  meta: boolean
}

export interface HotkeyHooks {
  update: (template: string) => Promise<void>
  destroy: () => void
}
