import { forwardRef } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'

import { ButtonOrLink } from '@/ui/ButtonOrLink/ButtonOrLink'
import type { ButtonOrLinkProps } from '@/ui/ButtonOrLink/ButtonOrLink'

import styles from './Button.module.css'

const buttonStyles = cva(styles.button, {
  variants: {
    intent: {
      primary: styles.primary,
      primaryDark: styles.primaryDark,
      accent: styles.accent,
      icon: styles.icon,
    },
    fullWidth: {
      true: styles.fullWidth,
    },
    size: {
      xs: styles.xs,
      small: styles.small,
      base: styles.base,
      medium: styles.medium,
    },
    loading: {
      true: styles.loading,
    },
    blocked: {
      true: styles.blocked,
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'base',
    loading: false,
    blocked: false,
  },
})

export interface ButtonProps
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export const Button = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps
>(function forwardButton(
  {
    intent,
    fullWidth,
    size,
    className,
    loading,
    blocked,
    ...props
  }: ButtonProps,
  ref,
) {
  return (
    <ButtonOrLink
      className={buttonStyles({
        intent,
        fullWidth,
        size,
        loading,
        blocked,
        className,
      })}
      {...props}
      ref={ref}
    />
  )
})

export const MotionButton = motion(Button)
