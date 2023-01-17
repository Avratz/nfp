import { cx } from 'class-variance-authority'
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { forwardRef } from 'react'

import styles from './Link.module.css'

export interface LinkProps extends NextLinkProps {
  className?: string
  children: React.ReactNode
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function forwardLink({ className, children, ...props }, ref) {
    return (
      <NextLink className={cx(styles.link, className)} {...props} ref={ref}>
        {children}
      </NextLink>
    )
  },
)
