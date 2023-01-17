'use client'
import { Link } from '@/ui/Link/Link'
import { ComponentProps, forwardRef } from 'react'

export type ButtonOrLinkProps = ComponentProps<'button'> &
  Omit<ComponentProps<typeof Link>, 'href'> & {
    href?: string
  }

export const ButtonOrLink = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonOrLinkProps
>(function ButtonOrLinkForward({ href, children, ...props }, ref) {
  if (typeof href !== 'undefined') {
    return (
      <Link href={href} {...props} ref={ref}>
        {children}
      </Link>
    )
  }

  return (
    <button {...props} ref={ref}>
      {children}
    </button>
  )
})
