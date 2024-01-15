export type PortalTarget = HTMLElement | string

export interface PortalHooks {
  update: (target: PortalTarget) => Promise<void>
  destroy: () => void
  attached: Promise<void>
}
