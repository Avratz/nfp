'use client'
import { Button } from '@/ui/Button/Button'
import { Divider } from '@/ui/Divider/Divider'
import { Link } from '@/ui/Link/Link'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <Divider vertical />
      <Link href="/" className={styles.link}>
        Discover
      </Link>
      <Link href="/" className={styles.link}>
        What we do
      </Link>
      <Button href="/" className={styles.button}>
        Connect Wallet
      </Button>
    </nav>
  )
}
