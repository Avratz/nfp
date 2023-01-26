'use client'
import { useEffect } from 'react'

export default function PWA() {
  useEffect(() => {
    if (navigator && navigator.serviceWorker) {
      navigator.serviceWorker.register('/sw.js')
    }
  }, [])
  return null
}
