import { cva, VariantProps } from 'class-variance-authority'

import ArrowDown from '@/assets/icons/arrow-down.svg'
import Stop from '@/assets/icons/stop.svg'
import ArrowLeft from '@/assets/icons/left-arrow.svg'
import ArrowRight from '@/assets/icons/right-arrow.svg'
import Search from '@/assets/icons/search.svg'
import Candlesticks from '@/assets/icons/candlesticks.svg'
import CloseCircle from '@/assets/icons/close-circle.svg'

import styles from './Icon.module.css'

const icons = {
  arrowDown: ArrowDown,
  stop: Stop,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  search: Search,
  candlesticks: Candlesticks,
  closeCircle: CloseCircle,
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

export type IconsName = keyof typeof icons

interface IconProps extends VariantProps<typeof iconStyle> {
  name: IconsName
  className?: string
}

export function Icon({ name, size, className }: IconProps) {
  const CurrentIcon = icons[name]
  return (
    <picture className={iconStyle({ size, className })}>
      <CurrentIcon />
    </picture>
  )
}
