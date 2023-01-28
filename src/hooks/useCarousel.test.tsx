import { act, renderHook } from '@testing-library/react'
import { useCarousel } from './useCarousel'

const data = ['a', 'b', 'c']

describe('useCarousel', () => {
  it('should return the first slide', () => {
    const { result } = renderHook(() => useCarousel(data))
    expect(result.current.selectedSlide).toBe('a')
  })

  it('should return the second slide', () => {
    const { result } = renderHook(() => useCarousel(data))
    act(() => {
      result.current.changeSlide('next')()
    })
    expect(result.current.selectedSlide).toBe('b')
  })

  it('should return the third slide', () => {
    const { result } = renderHook(() => useCarousel(data))
    act(() => {
      result.current.changeSlide('next')()
      result.current.changeSlide('next')()
    })
    expect(result.current.selectedSlide).toBe('c')
  })

  it('should return the first slide', () => {
    const { result } = renderHook(() => useCarousel(data))
    act(() => {
      result.current.changeSlide('next')()
      result.current.changeSlide('next')()
      result.current.changeSlide('next')()
    })
    expect(result.current.selectedSlide).toBe('a')
  })

  it('should return the third slide', () => {
    const { result } = renderHook(() => useCarousel(data))
    act(() => {
      result.current.changeSlide('prev')()
    })
    expect(result.current.selectedSlide).toBe('c')
  })

  it('should return the second slide', () => {
    const { result } = renderHook(() => useCarousel(data))
    act(() => {
      result.current.changeSlide('prev')()
      result.current.changeSlide('prev')()
    })
    expect(result.current.selectedSlide).toBe('b')
  })

  it('should return the first slide', () => {
    const { result } = renderHook(() => useCarousel(data))
    act(() => {
      result.current.changeSlide('prev')()
      result.current.changeSlide('prev')()
      result.current.changeSlide('prev')()
    })
    expect(result.current.selectedSlide).toBe('a')
  })
})
