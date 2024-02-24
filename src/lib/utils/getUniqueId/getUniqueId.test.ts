import { describe, expect, it } from 'vitest'

import { getUniqueId } from './getUniqueId'

describe('getUniqueId', () => {
  it('should return a unique identifier on each call', () => {
    const testIterations = 100

    const ids = new Array(testIterations)
    for (let i = 0; i < testIterations; i++) {
      ids[i] = getUniqueId()
    }

    const unique = new Set(ids)
    expect(unique.size).toEqual(testIterations)
  })

  it('should include the provided prefix in the returned id', () => {
    const prefix = 'user_'
    const id = getUniqueId(prefix)
    expect(id.startsWith(prefix)).toBe(true)
  })
})
