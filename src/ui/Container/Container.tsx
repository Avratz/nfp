import { cx } from 'class-variance-authority'
import { createElement } from 'react'

import styles from './Container.module.css'

type ContainerProps = {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
  padding?: boolean
}

export function Container({
  children,
  className,
  padding = true,
  as = 'div',
}: ContainerProps) {
  return createElement(
    as,
    {
      className: cx(
        className,
        styles.container,
        padding ? styles.containerPadding : '',
      ),
    },
    children,
  )
}
