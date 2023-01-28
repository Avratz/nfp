'use client'
import { useRef, useState } from 'react'

export function useCarousel<T extends any[]>(
  data: T,
  startingIndex = 0,
): {
  selectedSlide: T[number]
  changeSlide: (direction: 'next' | 'prev') => () => void
  currentIndex: number
} {
  const index = useRef(startingIndex)
  const [selectedSlide, setSelectedSlide] = useState(data[startingIndex])

  /**
   * Summary: Returns a function that will change the current slide index to the next or previous.
   */
  function changeSlide(direction: 'next' | 'prev') {
    return function () {
      const currentIndex = index.current
      let nextIndex = currentIndex + (direction === 'next' ? 1 : -1)

      if (nextIndex >= data.length) {
        nextIndex = 0
      }

      if (nextIndex < 0) {
        nextIndex = data.length - 1
      }

      index.current = nextIndex
      setSelectedSlide(data[index.current])
    }
  }

  return { selectedSlide, changeSlide, currentIndex: index.current }
}
