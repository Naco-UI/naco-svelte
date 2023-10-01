export interface Hotkey {
  key: string
  ctrl: boolean
  /**
   * CTRL on Linux and Windows, CMD on macOS
   */
  cmd: boolean
  alt: boolean
  shift: boolean
}

export interface HotkeyHooks {
  update: (template: string) => Promise<void>
  destroy: () => void
}
