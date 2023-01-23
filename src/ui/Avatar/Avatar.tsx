import { cva, VariantProps } from 'class-variance-authority'
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

interface AvatarProps extends VariantProps<typeof avatarStyles> {
  src: string
  alt?: string
  size?: 'small' | 'base'
  className?: string
}

export function Avatar({
  src,
  alt = '',
  size = 'base',
  className,
}: AvatarProps) {
  return (
    <picture
      className={avatarStyles({
        size,
        className,
      })}
    >
      <Image
        src={src}
        alt={alt}
        width={size === 'small' ? 20 : 36}
        height={size === 'small' ? 20 : 36}
        sizes="100vw"
      />
    </picture>
  )
}
