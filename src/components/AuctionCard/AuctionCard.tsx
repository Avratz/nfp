import { Avatar } from '@/ui/Avatar/Avatar'
import { Divider } from '@/ui/Divider/Divider'
import { Heading } from '@/ui/Heading/Heading'
import { Icon } from '@/ui/Icon/Icon'
import Image from 'next/image'

import styles from './AuctionCard.module.css'

type AuctionCardProps = {
  image: string
  author: string
  instantPrice: string
  stock: number
  authorAvatar: string
  highestBid: string
  bidUsers?: {
    name: string
    avatar: string
    id: number
  }[]
}

export function AuctionCard({
  image,
  author,
  instantPrice,
  stock,
  authorAvatar,
  highestBid,
  bidUsers = [],
}: AuctionCardProps) {
  return (
    <article className={styles.auctionCard}>
      <picture className={styles.image}>
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 40vw,
              15vw"
          style={{
            objectFit: 'cover',
          }}
          quality={65}
        />
      </picture>
      <div className={styles.auctionCardData}>
        <header className={styles.headerTitle}>
          <Heading as="h3" className={styles.title}>
            {author} NFT
          </Heading>
          <span className={styles.instantPrice}>{instantPrice}</span>
        </header>
        <div className={styles.stock}>
          <span className={styles.stockAvatars}>
            {bidUsers.map(({ avatar, id }) => (
              <Avatar src={avatar} size="small" key={id} />
            ))}
          </span>
          <span className={styles.stockValue}>{stock} in stock</span>
        </div>
        <Divider />
        <div className={styles.highestBidBox}>
          <span className={styles.highestBid}>
            <Icon name="candlesticks" />
            <span>Highest bid </span>
            <span className={styles.highestBidValue}>{highestBid}</span>
          </span>
          <span>New bid 🔥</span>
        </div>
      </div>
    </article>
  )
}
