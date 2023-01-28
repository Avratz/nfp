import { act, renderHook } from '@testing-library/react'
import { useOverlay } from './useOverlay'

describe('useOverlay', () => {
  it('should return isOpen as false and body overflow as "unset"', () => {
    const { result } = renderHook(() => useOverlay())
    expect(result.current.isOpen).toBe(false)
    expect(document.body.style.overflow).toBe('unset')
  })

  it('should return isOpen as true and body overflow as "hidden"', () => {
    const { result } = renderHook(() => useOverlay())
    act(() => {
      result.current.setIsOpen(true)
    })
    expect(result.current.isOpen).toBe(true)
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('should return isOpen as false and body overflow as "unset"', () => {
    const { result } = renderHook(() => useOverlay())
    act(() => {
      result.current.setIsOpen(true)
    })
    act(() => {
      result.current.setIsOpen(false)
    })
    expect(result.current.isOpen).toBe(false)
    expect(document.body.style.overflow).toBe('unset')
  })
})
