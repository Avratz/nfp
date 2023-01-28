'use client'
import Image from 'next/image'

import { cx } from 'class-variance-authority'
import { motion } from 'framer-motion'

// this is overkill, but it's an example of how to use '@tanstack/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useCarousel } from '@/hooks/useCarousel'
import { Auction } from '@/types/auctions'
import { Heading } from '@/ui/Heading/Heading'
import { Avatar } from '@/ui/Avatar/Avatar'
import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'
import { Container } from '@/ui/Container/Container'

import { PopularAuctionsStatus } from '@/components/PopularAuctionsStatus/PopularAuctionsStatus'
import { PopularAuctionsActionButtons } from '@/components/PopularAuctionsActionButtons/PopularAuctionsActionButtons'

import styles from './PopularAuctions.module.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
    },
  },
})

let animationDefault = {
  initial: {
    x: 0,
    y: 50,
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  animate: {
    x: 0,
    y: 0,
  },
  transition: {
    duration: 0.3,
    ease: 'easeIn',
  },
}

export function PopularAuctions({ data }: { data: [Auction[]] }) {
  const [auctions] = data
  const { selectedSlide, changeSlide, currentIndex } =
    useCarousel<Auction[]>(auctions)

  return (
    <Container as="section" className={styles.popularAuctions}>
      <motion.picture className={styles.image} {...animationDefault}>
        <Image
          src={selectedSlide.media.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw,
              50vw"
          style={{
            objectFit: 'cover',
          }}
          priority
        />
      </motion.picture>

      <motion.div className={styles.auctionData} {...animationDefault}>
        <div>
          <Heading as="h3" size="6xl" className={styles.title}>
            The {getLastName(selectedSlide.author)} Network ®
          </Heading>
          <div className={styles.authorAndPrice}>
            <div className={styles.box}>
              <Avatar
                src={selectedSlide.authorAvatar}
                alt={selectedSlide.author}
              />
              <div className={styles.boxData}>
                <div className={styles.topTitle}>Creator</div>
                <Heading as="h4" size="sm" className={styles.bottomTitle}>
                  {selectedSlide.author}
                </Heading>
              </div>
            </div>
            <div className={styles.box}>
              <Button
                className={styles.priceIcon}
                intent="icon"
                title="Buy now"
              >
                <Icon name="stop" />
              </Button>
              <div className={styles.boxData}>
                <div className={styles.topTitle}>Instant price</div>
                <Heading as="h4" size="sm" className={styles.bottomTitle}>
                  {selectedSlide.instantPrice}
                </Heading>
              </div>
            </div>
          </div>
        </div>

        <QueryClientProvider client={queryClient}>
          <PopularAuctionsStatus selectedSlide={selectedSlide} />
        </QueryClientProvider>

        <PopularAuctionsActionButtons highestBid={selectedSlide.highestBid} />

        <div className={styles.navigation}>
          <Button
            intent="icon"
            className={cx(
              styles.arrow,
              currentIndex === 0 ? styles.disabled : '',
            )}
            title="Previous Auction"
            onClick={changeSlide('prev')}
          >
            <Icon name="arrowLeft" />
          </Button>
          <Button
            intent="icon"
            className={cx(
              styles.arrow,
              currentIndex === auctions.length - 1 ? styles.disabled : '',
            )}
            title="Next Auction"
            onClick={changeSlide('next')}
          >
            <Icon name="arrowRight" />
          </Button>
        </div>
      </motion.div>
    </Container>
  )
}

function getLastName(name: string) {
  // name is formatted as 'First Last'
  return name.split(' ').pop()
}
