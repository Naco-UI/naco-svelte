import { writable } from 'svelte/store'

export const isMac = navigator.appVersion.includes('Mac')
export const isLinux = navigator.platform.includes('Linux')

const darkMedia = window.matchMedia('(prefers-color-scheme: dark)')
export const isDark = writable<boolean>(darkMedia.matches)

darkMedia.addEventListener('change', (event) => {
  isDark.set(event.matches)
})
