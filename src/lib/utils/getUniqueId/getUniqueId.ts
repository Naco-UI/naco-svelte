let uniqueId = 0

export function getUniqueId(prefix = ''): string {
  uniqueId += 1
  return `${prefix}${uniqueId}`
}
