import { getWithCacheRevalidationIn } from '@/lib/fetcher'
import { EthereumPrice } from '@/types/prices'

export function getEthereumPrice(): Promise<EthereumPrice> {
  return getWithCacheRevalidationIn(20)(
    '/eth-price',
    process.env.API_KEY as string,
  )
}
