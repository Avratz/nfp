'use client'
import { useRef, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.css'

interface ModalProps {
  children: ReactNode
  setIsOpen: (isOpen: boolean) => void
}

export function Modal({ children, setIsOpen }: ModalProps) {
  const modalElement = useRef<Element | null>(null)

  if (!modalElement.current) {
    modalElement.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    if (modalRoot !== null && modalElement.current !== null) {
      modalRoot.appendChild(modalElement.current)
    }

    return () => {
      if (modalRoot !== null && modalElement.current !== null) {
        modalRoot.removeChild(modalElement.current)
      }
    }
  }, [])

  return createPortal(
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      {children}
    </div>,
    modalElement.current,
  )
}
