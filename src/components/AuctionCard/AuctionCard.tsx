import Image from 'next/image'
import { motion } from 'framer-motion'

import { Avatar } from '@/ui/Avatar/Avatar'
import { Button } from '@/ui/Button/Button'
import { Divider } from '@/ui/Divider/Divider'
import { Heading } from '@/ui/Heading/Heading'
import { Icon } from '@/ui/Icon/Icon'
import { Badge } from '@/ui/Badge/Badge'

import styles from './AuctionCard.module.css'

type AuctionCardProps = {
  image: string
  author: string
  instantPrice: string
  stock: number
  highestBid: string
  bidUsers?: {
    name: string
    avatar: string
    id: number
  }[]
  attributeType: string
}

export function AuctionCard({
  image,
  author,
  instantPrice,
  stock,
  highestBid,
  bidUsers = [],
  attributeType,
}: AuctionCardProps) {
  return (
    <motion.article
      className={styles.auctionCard}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeIn',
      }}
    >
      <picture className={styles.image}>
        <div className={styles.layerOver}>
          <div className={styles.auctionInfoHover}>
            <Badge>{attributeType}</Badge>
            <Button intent="icon" className={styles.heartButton} title="Like">
              <Icon name="heart" />
            </Button>
          </div>
          <Button intent="accent" className={styles.placeABidBtn}>
            <span>Place a bid</span> <Icon name="scatter" />
          </Button>
        </div>
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
          <Badge variant="outline">{instantPrice}</Badge>
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
    </motion.article>
  )
}
