import { Button } from '@/ui/Button/Button'
import { Container } from '@/ui/Container/Container'
import { Heading } from '@/ui/Heading/Heading'

import styles from './Hero.module.css'

export function Hero() {
  return (
    <Container as="section" className={styles.hero}>
      <Heading as="h4" className={styles.toptitle}>
        Create, explore, & SELL digital art NFTs.
      </Heading>
      <Heading as="h2" className={styles.title}>
        The new creative economy.
      </Heading>
      <Button href="/">Explore</Button>
    </Container>
  )
}
