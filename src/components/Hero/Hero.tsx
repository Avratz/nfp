import { Button } from '@/ui/Button/Button'
import { Container } from '@/ui/Container/Container'
import { Heading } from '@/ui/Heading/Heading'

import styles from './Hero.module.css'

export function Hero() {
  return (
    <Container as="section" className={styles.hero}>
      <p className={styles.toptitle}>
        Create, explore, & SELL digital art NFTs.
      </p>
      <Heading as="h2" size="4xl" className={styles.title}>
        The new creative economy.
      </Heading>
      <Button href="/" className={styles.exploreButton}>
        Explore
      </Button>
    </Container>
  )
}
