import { fetcher } from '@/lib/fetcher'
import { EthereumPrice } from '@/types/prices'

export function getEthereumPrice({
  queryKey,
}: {
  queryKey: string[]
}): Promise<EthereumPrice> {
  const [_key, coin] = queryKey
  return fetcher('/coin-prices?coin=' + coin, {
    baseUrl: 'api',
  })
}
