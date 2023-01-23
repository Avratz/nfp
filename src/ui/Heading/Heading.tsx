import { createElement, forwardRef, ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import styles from './Heading.module.css'

const headingStyles = cva(styles.heading, {
  variants: {
    size: {
      '2xs': styles['2xs'],
      xs: styles.xs,
      sm: styles.sm,
      base: styles.base,
      lg: styles.lg,
      xl: styles.xl,
      '2xl': styles['2xl'],
      '3xl': styles['3xl'],
      '4xl': styles['4xl'],
      '5xl': styles['5xl'],
      '6xl': styles['6xl'],
    },
    inlineBlock: {
      true: styles.inlineBlock,
    },
  },
  defaultVariants: {
    size: 'base',
    inlineBlock: false,
  },
})

interface HeadingProps extends VariantProps<typeof headingStyles> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined
  children: ReactNode
  className?: string
  inlineBlock?: boolean
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function forwardHeading(
    { as = 'h1', size = 'base', children, className, inlineBlock },
    ref,
  ) {
    return createElement(
      as,
      {
        ref,
        className: headingStyles({ size, inlineBlock, className }),
      },
      children,
    )
  },
)
