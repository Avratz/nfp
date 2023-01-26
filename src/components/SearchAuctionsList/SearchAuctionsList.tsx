import Image from 'next/image'
import { useDeferredValue } from 'react'

import { useSearchAuctions } from '@/hooks/useSearchAuctionsContext'

import { Button } from '@/ui/Button/Button'
import { Heading } from '@/ui/Heading/Heading'
import { Icon } from '@/ui/Icon/Icon'

import { AuctionCard } from '@/components/AuctionCard/AuctionCard'

import styles from './SearchAuctionsList.module.css'

export function SearchAuctionsList() {
  const { auctions } = useSearchAuctions()
  const deferredAuctions = useDeferredValue(auctions)
  return (
    <div className={styles.auctionCardsContainer}>
      <div className={styles.auctionCards}>
        {deferredAuctions.length === 0 ? (
          <div className={styles.noMatch}>
            <Image src="/images/error.png" alt="" width={215} height={160} />
            <Heading as="h3" size="2xl">
              Im terrible sorry about all this.
            </Heading>
            <Heading as="h4">Please try again with another filter.</Heading>
          </div>
        ) : (
          deferredAuctions.map((auction, index) => (
            <AuctionCard
              key={index}
              image={auction.media.image}
              author={auction.author}
              instantPrice={auction.instantPrice}
              stock={auction.stock}
              highestBid={auction.highestBid}
              bidUsers={auction.bidUsers}
              attributeType={auction.attributes.type}
            />
          ))
        )}
      </div>
      {deferredAuctions.length != 0 ? (
        <Button blocked={true} size="small">
          <div className={styles.loading}>
            <Icon name="loading" /> <span>Load more</span>
          </div>
        </Button>
      ) : null}
    </div>
  )
}
