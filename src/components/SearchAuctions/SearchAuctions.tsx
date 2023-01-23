'use client'
import { popularAuctions } from '@/dummyData'
import { Container } from '@/ui/Container/Container'
import { AuctionCard } from '@/components/AuctionCard/AuctionCard'
import { SearchAuctionsHeader } from '@/components/SearchAuctionsHeader/SearchAuctionsHeader'
import { SearchAuctionsSidebar } from '@/components/SearchAuctionsSidebar/SearchAuctionsSidebar'

import styles from './SearchAuctions.module.css'

export function SearchAuctions() {
  return (
    <Container as="section" className={styles.container}>
      <SearchAuctionsHeader />
      <div>
        <SearchAuctionsSidebar />
        <div className={styles.auctionCards}>
          {popularAuctions.map((auction) => (
            <AuctionCard
              key={auction.id}
              image={auction.media.image}
              author={auction.author}
              instantPrice={auction.instantPrice}
              stock={auction.stock}
              authorAvatar={auction.authorAvatar}
              highestBid={auction.highestBid}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
