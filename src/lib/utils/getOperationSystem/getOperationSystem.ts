import { OperationSystem } from './getOperationSystem.types'

/**
 * Detects and returns the operating system of the user's device based on the user agent string.
 * @returns {OperationSystem} The detected operating system.
 */
export function getOperationSystem(): OperationSystem {
  const { userAgent } = window.navigator

  if (userAgent.includes('Windows NT')) return OperationSystem.Windows
  if (userAgent.includes('Macintosh;')) return OperationSystem.MacOS
  if (userAgent.includes('X11;')) return OperationSystem.Linux
  if (userAgent.includes('Linux; Android')) return OperationSystem.Android
  if (/iPad|iPhone|iPod/.test(userAgent)) return OperationSystem.iOS

  return OperationSystem.Unknown
}
