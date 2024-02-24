let uniqueId = 0

/**
 * Generates a unique identifier with an optional prefix.
 */
export function getUniqueId(prefix = ''): string {
  uniqueId += 1
  return `${prefix}${uniqueId}`
}
