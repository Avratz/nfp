import { cx } from 'class-variance-authority'
import PaisanosFlag from '@/assets/images/paisanos-flag.svg'

import { Link } from '@/ui/Link/Link'
import { Heading } from '@/ui/Heading/Heading'

import styles from './Logo.module.css'

type LogoProps = {
  className?: string
  dark?: boolean
  href?: string
}

export function Logo({ className = '', dark, href = '/' }: LogoProps) {
  return (
    <Link
      href={href}
      className={cx(styles.logo, className, dark ? styles.dark : '')}
    >
      <picture className={styles.isotipo}>
        <PaisanosFlag className={dark ? styles.dark : styles.white} />
      </picture>
      <Heading
        size="2xl"
        inlineBlock
        className={cx(styles.heading, dark ? styles.dark : '')}
      >
        NFPaisanos
      </Heading>
    </Link>
  )
}
