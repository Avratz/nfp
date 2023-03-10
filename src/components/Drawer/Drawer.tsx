'use client'
import { Button } from '@/ui/Button/Button'
import { Heading } from '@/ui/Heading/Heading'
import { Link } from '@/ui/Link/Link'
import { Variants, motion } from 'framer-motion'

import styles from './Drawer.module.css'

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}
const sidebar: Variants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: 'inset(0% 0% 100% 0%)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
}

const MotionHeading = motion(Heading)
const MotionButton = motion(Button)
const MotionLink = motion(Link)

export function Drawer({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.nav
      className={styles.nav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebar}
    >
      <motion.div className={styles.navInner}>
        <MotionHeading
          as="h3"
          size="2xl"
          layout
          variants={itemVariants}
          className={styles.heading}
        >
          Menu
        </MotionHeading>
        <MotionLink
          href="/"
          layout
          variants={itemVariants}
          className={styles.link}
        >
          Discover
        </MotionLink>
        <MotionLink
          href="/"
          layout
          variants={itemVariants}
          className={styles.link}
        >
          What we do
        </MotionLink>
        <motion.div
          className={styles.lineSeparation}
          variants={itemVariants}
        ></motion.div>
        <MotionHeading
          as="h3"
          size="2xl"
          layout
          variants={itemVariants}
          className={styles.heading}
        >
          Connect
        </MotionHeading>
        <MotionButton
          href="/"
          layout
          variants={itemVariants}
          intent="primaryDark"
          className={styles.button}
        >
          Connect Wallet
        </MotionButton>
      </motion.div>
    </motion.nav>
  )
}
