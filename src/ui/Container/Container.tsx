import { cx } from 'class-variance-authority'
import { createElement, Fragment } from 'react'

import styles from './Container.module.css'

type ContainerProps = {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

export function Container({
  children,
  className,
  as = Fragment,
}: ContainerProps) {
  return createElement(
    as,
    { className: cx(className, styles.container) },
    children,
  )
}
