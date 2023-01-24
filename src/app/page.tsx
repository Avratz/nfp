import { Suspense } from 'react'
import { Hero } from '@/components/Hero/Hero'
import { PopularAuctions } from '@/components/PopularAuctions/PopularAuctions'
import { SearchAuctions } from '@/components/SearchAuctions/SearchAuctions'
import { withData } from '@/HOC/withData'

import { getPopularAuctions } from '@/api/auctions'
import { Auction } from '@/types/auctions'

type PopularAuctionsDataProps = {
  data: [Auction[]]
  requests: [() => Promise<Auction[]>]
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
          <PopularAuctionsData requests={[getPopularAuctions]} />
        }
      </Suspense>
      <SearchAuctions />
    </main>
  )
}
