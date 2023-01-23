import { cx } from 'class-variance-authority'
import Image from 'next/image'

import { Avatar } from '@/ui/Avatar/Avatar'
import { Button } from '@/ui/Button/Button'
import { Container } from '@/ui/Container/Container'
import { Heading } from '@/ui/Heading/Heading'
import { Icon } from '@/ui/Icon/Icon'

import { popularAuctions, ethereumPrice } from '@/dummyData'

import styles from './PopularAuctions.module.css'

export function PopularAuctions() {
  const firstAuction = popularAuctions[0]

  return (
    <Container as="section" className={styles.popularAuctions}>
      <picture className={styles.image}>
        <Image
          src={firstAuction.media.image}
          alt=""
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </picture>

      <div className={styles.auctionData}>
        <div>
          <Heading as="h3" size="6xl" className={styles.title}>
            The {firstAuction.author} Network ®
          </Heading>
          <div className={styles.authorAndPrice}>
            <div className={styles.box}>
              <Avatar
                src={firstAuction.authorAvatar}
                alt={firstAuction.author}
              />
              <div className={styles.boxData}>
                <div className={styles.topTitle}>Creator</div>
                <Heading as="h4" size="sm" className={styles.bottomTitle}>
                  {firstAuction.author}
                </Heading>
              </div>
            </div>
            <div className={styles.box}>
              <Button className={styles.priceIcon} intent="icon">
                <Icon name="stop" />
              </Button>
              <div className={styles.boxData}>
                <div className={styles.topTitle}>Instant price</div>
                <Heading as="h4" size="sm" className={styles.bottomTitle}>
                  {firstAuction.instantPrice}
                </Heading>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.auctionStatus}>
          <div>
            <div className={styles.auctionStatusTitle}>Current Bid</div>
            <Heading as="h4" size="5xl">
              {firstAuction.highestBid}
            </Heading>
            <Heading as="h5" size="2xl" className={styles.priceUsd}>
              $ {ethereumPrice.usd}
            </Heading>
          </div>
          <div>
            <div className={styles.auctionStatusTitle}>Auction ending in</div>
            <div className={styles.timer}>
              <div className={styles.time}>
                <div className={styles.timeValue}>19</div>
                <div className={styles.timeUnit}>Hrs</div>
              </div>
              <div className={styles.time}>
                <div className={styles.timeValue}>24</div>
                <div className={styles.timeUnit}>mins</div>
              </div>
              <div className={styles.time}>
                <div className={styles.timeValue}>19</div>
                <div className={styles.timeUnit}>secs</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.auctionButtons}>
          <Button intent="accent">Place a bid</Button>
          <Button intent="primary">View item</Button>
        </div>

        <div className={styles.navigation}>
          <Button intent="icon" className={cx(styles.arrow, styles.disabled)}>
            <Icon name="arrowLeft" />
          </Button>
          <Button intent="icon" className={styles.arrow}>
            <Icon name="arrowRight" />
          </Button>
        </div>
      </div>
    </Container>
  )
}
