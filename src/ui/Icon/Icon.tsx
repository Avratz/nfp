import { cva, VariantProps } from 'class-variance-authority'

import ArrowDown from '@/assets/icons/arrow-down.svg'
import Stop from '@/assets/icons/stop.svg'
import ArrowLeft from '@/assets/icons/left-arrow.svg'
import ArrowRight from '@/assets/icons/right-arrow.svg'

import styles from './Icon.module.css'

const icons = {
  arrowDown: ArrowDown,
  stop: Stop,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
}
const iconStyle = cva(styles.icon, {
  variants: {
    size: {
      xs: styles.xs,
      small: styles.small,
      base: styles.base,
      medium: styles.medium,
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

interface IconProps extends VariantProps<typeof iconStyle> {
  type: keyof typeof icons
  className?: string
}

export function Icon({ type, size, className }: IconProps) {
  const CurrentIcon = icons[type]
  return (
    <picture className={iconStyle({ size, className })}>
      <CurrentIcon />
    </picture>
  )
}
