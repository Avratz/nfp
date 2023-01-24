'use client'
import Image from 'next/image'
import { cx } from 'class-variance-authority'

import { Auction } from '@/types/auctions'
import { EthereumPrice } from '@/types/prices'

import { Heading } from '@/ui/Heading/Heading'
import { Avatar } from '@/ui/Avatar/Avatar'
import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'
import { Container } from '@/ui/Container/Container'

import styles from './PopularAuctions.module.css'
import { useCarousel } from '@/hooks/useCarousel'
import { getTimeLeft } from '@/lib/time'

export function PopularAuctions({
  data,
}: {
  data: [Auction[], EthereumPrice]
}) {
  const [auctions, ethereumPrice] = data
  const { selectedSlide, changeSlide, currentIndex } =
    useCarousel<Auction[]>(auctions)

  const { hours, minutes, seconds } = getTimeLeft(selectedSlide.endsAt)
  return (
    <Container as="section" className={styles.popularAuctions}>
      <picture className={styles.image}>
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
      </picture>

      <div className={styles.auctionData}>
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

        <div className={styles.auctionStatus}>
          <div>
            <div className={styles.auctionStatusTitle}>Current Bid</div>
            <Heading as="h4" size="5xl">
              {selectedSlide.highestBid}
            </Heading>
            <Heading as="h5" size="2xl" className={styles.priceUsd}>
              $ {fromEthToUsd(selectedSlide.highestBid, ethereumPrice.usd)}
            </Heading>
          </div>
          <div>
            <div className={styles.auctionStatusTitle}>Auction ending in</div>
            <div className={styles.timer}>
              <div className={styles.time}>
                <div className={styles.timeValue}>{hours}</div>
                <div className={styles.timeUnit}>Hrs</div>
              </div>
              <div className={styles.time}>
                <div className={styles.timeValue}>{minutes}</div>
                <div className={styles.timeUnit}>mins</div>
              </div>
              <div className={styles.time}>
                <div className={styles.timeValue}>{seconds}</div>
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
      </div>
    </Container>
  )
}

function getLastName(name: string) {
  // name is formatted as 'First Last'
  return name.split(' ').pop()
}

function fromEthToUsd(eth: string, usdOneEth: string) {
  // eth is formatted as 'xxxx ETH'
  let ethNumber = Number(eth.split(' ')[0])
  // usd is formatted as 'x,xxx.xx'
  let usdNumber = Number(usdOneEth.replace(',', ''))

  let total = ethNumber * usdNumber
  return total.toFixed(2)
}
