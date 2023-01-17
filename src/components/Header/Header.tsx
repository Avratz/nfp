'use client'
import { useState } from 'react'

import { Container } from '@/ui/Container/Container'

import { Logo } from '@/components/Logo/Logo'
import { ButtonMenu } from '@/components/ButtonMenu/ButtonMenu'
import { Navbar } from '@/components/Navbar/Navbar'

import styles from './Header.module.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container as="header" className={styles.header}>
      <Logo dark={isOpen} />
      <Navbar isOpen={isOpen} />
      <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  )
}
