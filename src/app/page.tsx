import { Suspense } from 'react'
import { Hero } from '@/components/Hero/Hero'
import { PopularAuctions } from '@/components/PopularAuctions/PopularAuctions'
import { SearchAuctions } from '@/components/SearchAuctions/SearchAuctions'
import { withData } from '@/HOC/withData'

import { getPopularAuctions } from '@/api/auctions'
import { getEthereumPrice } from '@/api/coinPrices'
import { Auction } from '@/types/auctions'
import { EthereumPrice } from '@/types/prices'

type PopularAuctionsDataProps = {
  data: [Auction[], EthereumPrice]
  requests: [() => Promise<Auction[]>, () => Promise<EthereumPrice>]
}
const PopularAuctionsData = withData<PopularAuctionsDataProps>(PopularAuctions)

export default async function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        {
          // @ts-expect-error: Return type 'Promise<Element>' is not a valid JSX element.
          // Async components are not supported yet.
          <PopularAuctionsData
            requests={[getPopularAuctions, getEthereumPrice]}
          />
        }
      </Suspense>
      <SearchAuctions />
    </main>
  )
}
