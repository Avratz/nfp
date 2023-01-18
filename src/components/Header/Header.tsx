'use client'
import { useEffect, useState } from 'react'

import { Container } from '@/ui/Container/Container'

import { Logo } from '@/components/Logo/Logo'
import { ButtonMenu } from '@/components/ButtonMenu/ButtonMenu'
import { Navbar } from '@/components/Navbar/Navbar'

import styles from './Header.module.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  return (
    <Container as="header" className={styles.header}>
      <Logo dark={isOpen} />
      <Navbar isOpen={isOpen} />
      <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  )
}
