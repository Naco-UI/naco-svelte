import { describe, expect, it } from 'vitest'

import { getUniqueId } from './getUniqueId'

describe('getUniqueId', () => {
  it('should return a unique identifier on each call', () => {
    const id1 = getUniqueId()
    const id2 = getUniqueId()
    expect(id1).not.toBe(id2)
  })

  it('should include the provided prefix in the returned id', () => {
    const prefix = 'user_'
    const id = getUniqueId(prefix)
    expect(id.startsWith(prefix)).toBe(true)
  })
})
