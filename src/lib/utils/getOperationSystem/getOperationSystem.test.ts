import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { getOperationSystem } from './getOperationSystem'
import { OperationSystem } from './getOperationSystem.types'

describe('getOperationSystem', () => {
  function setUserAgent(userAgent: string): void {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgent,
      writable: true,
    })
  }

  let originalUserAgent: string

  beforeAll(() => {
    originalUserAgent = window.navigator.userAgent
  })

  afterAll(() => {
    setUserAgent(originalUserAgent)
  })

  it('should return Windows for a Windows user agent', () => {
    setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)')
    expect(getOperationSystem()).toBe(OperationSystem.Windows)
  })

  it('should return MacOS for a Mac user agent', () => {
    setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)')
    expect(getOperationSystem()).toBe(OperationSystem.MacOS)
  })

  it('should return Linux for a Linux user agent', () => {
    setUserAgent('Mozilla/5.0 (X11; Linux x86_64)')
    expect(getOperationSystem()).toBe(OperationSystem.Linux)
  })

  it('should return Android for an Android user agent', () => {
    setUserAgent('Mozilla/5.0 (Linux; Android 10; Pixel 3 XL)')
    expect(getOperationSystem()).toBe(OperationSystem.Android)
  })

  it('should return Unknown for an unrecognized user agent', () => {
    setUserAgent('Mozilla/5.0 (compatible; UnknownBrowser 1.0)')
    expect(getOperationSystem()).toBe(OperationSystem.Unknown)
  })

  it('should return iOS for an iOS user agent', () => {
    setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X)')
    expect(getOperationSystem()).toBe(OperationSystem.iOS)
  })
})
