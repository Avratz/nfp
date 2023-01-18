import { cva } from 'class-variance-authority'
import Image from 'next/image'

import styles from './Avatar.module.css'

const avatarStyles = cva(styles.avatar, {
  variants: {
    size: {
      small: styles.small,
      base: styles.base,
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

export function Avatar({
  src,
  alt = '',
  size = 'base',
  className,
}: {
  src: string
  alt?: string
  size?: 'small' | 'base'
  className?: string
}) {
  return (
    <picture
      className={avatarStyles({
        size,
        className,
      })}
    >
      <Image src={src} alt={alt} fill />
    </picture>
  )
}
