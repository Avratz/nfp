import { getEthereumPrice } from '@/api/coinPrices'
import { getTimeLeft } from '@/lib/time'
import { Auction } from '@/types/auctions'
import { Heading } from '@/ui/Heading/Heading'
import { useQuery } from '@tanstack/react-query'

import styles from './PopularAuctionsStatus.module.css'

export function PopularAuctionsStatus({
  selectedSlide,
}: {
  selectedSlide: Auction
}) {
  const { hours, minutes, seconds } = getTimeLeft(selectedSlide.endsAt)
  const results = useQuery(['eth-price', 'eth'], getEthereumPrice)

  return (
    <div className={styles.auctionStatus}>
      <div>
        <div className={styles.auctionStatusTitle}>Current Bid</div>
        <Heading as="h4" size="5xl">
          {selectedSlide.highestBid}
        </Heading>
        {results.isLoading ? (
          <div className={styles.skeleton}></div>
        ) : results.isError ? (
          <div>C-3PO says he is terribly sorry about all this.</div>
        ) : (
          <Heading as="h5" size="2xl" className={styles.priceUsd}>
            $ {fromEthToUsd(selectedSlide.highestBid, results.data.usd)}
          </Heading>
        )}
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
  )
}

function fromEthToUsd(eth: string, usdOneEth: number) {
  // eth is formatted as 'xxxx ETH'
  let ethNumber = Number(eth.split(' ')[0])

  let total = ethNumber * usdOneEth
  return total.toFixed(2)
}
