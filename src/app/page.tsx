import { Hero } from '@/components/Hero/Hero'
import { PopularAuctions } from '@/components/PopularAuctions/PopularAuctions'
import { SearchAuctions } from '@/components/SearchAuctions/SearchAuctions'

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularAuctions />
      <SearchAuctions />
    </main>
  )
}
