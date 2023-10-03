export type ScrollLockTarget = HTMLElement | string

export interface ScrollLockParams {
  lock: boolean
  target?: HTMLElement | string
  unlockDelay?: number
}

export interface ScrollLockHooks {
  update: (params: ScrollLockParams) => void
  destroy: () => void
}
