'use client'
import { Button } from '@/ui/Button/Button'

import styles from './ButtonMenu.module.css'
import { cx } from 'class-variance-authority'

export function ButtonMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <Button
      intent="icon"
      className={styles.menuButton}
      onClick={handleClick}
      title="Menu"
    >
      <div
        className={cx(styles.bar, styles.top, isOpen ? styles.crossTop : '')}
      ></div>
      <div
        className={cx(
          styles.bar,
          styles.bottom,
          isOpen ? styles.crossBottom : '',
        )}
      ></div>
    </Button>
  )
}
