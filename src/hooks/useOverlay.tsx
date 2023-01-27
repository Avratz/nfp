'use client'
import { useEffect, useState } from 'react'

export function useOverlay() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    document.body.style.marginRight = isOpen ? '17px' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.marginRight = 'unset'
    }
  }, [isOpen])

  return {
    isOpen,
    setIsOpen,
  }
}
