import { getCachedOneMinute } from '@/lib/fetcher'
import { Auction } from '@/types/auctions'

export function getPopularAuctions(): Promise<Auction[]> {
  return getCachedOneMinute('/popular', process.env.API_KEY as string)
}

export function getAllAuctions(): Promise<Auction[]> {
  return getCachedOneMinute('/aunctions', process.env.API_KEY as string)
}
