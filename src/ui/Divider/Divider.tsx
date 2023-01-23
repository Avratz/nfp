import { cx } from 'class-variance-authority'
import styles from './Divider.module.css'

export function Divider({
  className = '',
  vertical = false,
}: {
  className?: string
  vertical?: boolean
}) {
  return (
    <hr
      className={cx(
        styles.divider,
        vertical ? styles.vertical : styles.horizontal,
        className,
      )}
    />
  )
}
