'use client'
import { Container } from '@/ui/Container/Container'
import { SearchAuctionsHeader } from '@/components/SearchAuctionsHeader/SearchAuctionsHeader'
import { SearchAuctionsSidebar } from '@/components/SearchAuctionsSidebar/SearchAuctionsSidebar'
import { SearchAuctionsList } from '@/components/SearchAuctionsList/SearchAuctionsList'

import { SearchAuctionsProvider } from '@/context/SearchAuctionsContext'
import { Auction } from '@/types/auctions'

import styles from './SearchAuctions.module.css'

export function SearchAuctions({ data }: { data: [Auction[]] }) {
  const [allAuctions] = data
  return (
    <Container as="section" className={styles.container}>
      <SearchAuctionsProvider allAuctions={allAuctions}>
        <SearchAuctionsHeader />
        <div className={styles.searchContainer}>
          <SearchAuctionsSidebar />
          <SearchAuctionsList />
        </div>
      </SearchAuctionsProvider>
    </Container>
  )
}
