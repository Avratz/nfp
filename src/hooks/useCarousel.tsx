'use client'
import { useEffect, useState } from 'react'

export function useCarousel<T extends any[]>(
  data: T,
  startingIndex = 0,
): {
  selectedSlide: T[number]
  changeSlide: (direction: 'next' | 'prev') => () => void
  currentIndex: number
} {
  const [currentIndex, setCurrentIndex] = useState(startingIndex)
  const [selectedSlide, setSelectedSlide] = useState(data[startingIndex])

  /**
   * Summary: Returns a function that will change the current slide index to the next or previous.
   */
  function changeSlide(direction: 'next' | 'prev') {
    return function () {
      let nextIndex = currentIndex + (direction === 'next' ? 1 : -1)
      nextIndex = nextIndex < 0 ? data.length - 1 : nextIndex
      setCurrentIndex(nextIndex)
    }
  }

  useEffect(() => {
    setSelectedSlide(data[currentIndex])
  }, [currentIndex, data])

  return { selectedSlide, changeSlide, currentIndex }
}
