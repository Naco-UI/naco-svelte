import type { OS } from '../ThemeProvider/index.js'

export const randomGradient = `conic-gradient(
  from 125deg at 50% 50%,
  #E9393E 0deg,
  #FF9E0C 56.25deg,
  #ADE403 110.6250deg,
  #27C4FF 163.125deg,
  #5055DE 213.75deg,
  #913ED3 258.75deg,
  #E54895 305.6250deg,
  #E73A46 360deg
)`

export const radioSize: Record<OS, number> = {
  mac: 16,
  linux: 18,
}
