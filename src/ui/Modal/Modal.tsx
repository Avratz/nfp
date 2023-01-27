'use client'
import { useKeydown } from '@/hooks/useKeydown'
import { useRef, useEffect, ReactNode, useMemo } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.css'

interface ModalProps {
  children: ReactNode
  closeModal: () => void
}

export function Modal({ children, closeModal }: ModalProps) {
  const modalElement = useRef<HTMLDivElement | null>(null)
  const modalParent = useRef<HTMLDivElement | null>(null)

  if (!modalElement.current) {
    modalElement.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    if (modalRoot !== null && modalElement.current !== null) {
      modalRoot.appendChild(modalElement.current)
    }

    if (modalParent.current !== null) {
      modalParent.current.focus()
    }

    return () => {
      if (modalRoot !== null && modalElement.current !== null) {
        modalRoot.removeChild(modalElement.current)
      }
    }
  }, [])

  const modalFocusTrap = createFocusTrap(modalElement)

  useKeydown(
    {
      Escape: closeModal,
      Tab: modalFocusTrap,
    },
    modalElement,
  )

  return createPortal(
    <div
      tabIndex={-1}
      className={styles.overlay}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      ref={modalParent}
    >
      {children}
    </div>,
    modalElement.current,
  )
}

function createFocusTrap(modalElement: React.RefObject<HTMLDivElement>) {
  return function focusTraplistener(event: KeyboardEvent) {
    if (modalElement.current === null) return undefined

    const focusableElements = modalElement.current.querySelectorAll(
      [
        'a',
        'button:not([disabled])',
        'details',
        'input:not([readonly])',
        'select',
        'textarea',
        '[tabindex]:not([tabindex^="-"])',
      ].join(','),
    ) as NodeListOf<HTMLElement>

    if (focusableElements.length === 0) return undefined

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.target === lastElement && !event.shiftKey) {
      event.preventDefault()
      firstElement.focus()
    }

    if (event.target === firstElement && event.shiftKey) {
      event.preventDefault()
      lastElement.focus()
    }
  }
}
