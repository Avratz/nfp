import { cx } from 'class-variance-authority'
import styles from './Divider.module.css'

export function Divider({ className = '' }: { className?: string }) {
  return <hr className={cx(styles.divider, className)} />
}
