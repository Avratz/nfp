'use client'
import dynamic from 'next/dynamic'

import { Container } from '@/ui/Container/Container'

import { Logo } from '@/components/Logo/Logo'
const Drawer = dynamic(
  async function () {
    return import('@/components/Drawer/Drawer').then((mod) => mod.Drawer)
  },
  {
    ssr: false,
    loading() {
      return null
    },
  },
)
import { Navbar } from '@/components/Navbar/Navbar'
import { ButtonMenu } from '@/components/ButtonMenu/ButtonMenu'

import { useMenu } from '@/hooks/useMenu'

import styles from './Header.module.css'

export function Header() {
  const { isOpen, setIsOpen } = useMenu()
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Logo dark={isOpen} />
        <Navbar />
        <Drawer isOpen={isOpen} />
        <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </header>
  )
}
