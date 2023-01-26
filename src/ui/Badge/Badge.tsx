import { ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import styles from './Badge.module.css'

const badgeStyles = cva(styles.badge, {
  variants: {
    variant: {
      outline: styles.outline,
      solid: styles.solid,
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

export interface BadgeProps extends VariantProps<typeof badgeStyles> {
  children: ReactNode
  className?: string
}

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <div
      className={badgeStyles({
        variant,
        className,
      })}
    >
      {children}
    </div>
  )
}
