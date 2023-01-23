'use client'
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

import styles from './Header.module.css'

import { useMenu } from '@/hooks/useMenu'
import { ButtonMenu } from '../ButtonMenu/ButtonMenu'
import dynamic from 'next/dynamic'

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
