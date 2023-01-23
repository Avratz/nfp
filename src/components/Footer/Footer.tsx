import { Logo } from '@/components/Logo/Logo'
import { Container } from '@/ui/Container/Container'
import { Divider } from '@/ui/Divider/Divider'
import { Heading } from '@/ui/Heading/Heading'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container padding={false}>
        <div className={styles.logoContainer}>
          <Logo />
          <Heading as="h2" className={styles.heading}>
            The New Creative Economy
          </Heading>
        </div>
        <Divider />
        <p className={styles.createdBy}>Created with ❤️ by Avratz</p>
      </Container>
    </footer>
  )
}
