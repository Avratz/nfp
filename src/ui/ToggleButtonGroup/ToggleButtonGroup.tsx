import { ReactNode } from 'react'
import { RadioGroup } from '@headlessui/react'
import { cx } from 'class-variance-authority'

import styles from './ToggleButtonGroup.module.css'

type ToggleButtonGroupProps = {
  value: string
  onChange: (value: string) => void
  children: ReactNode
  className?: string
}

export function ToggleButtonGroup({
  value,
  onChange,
  children,
  className,
}: ToggleButtonGroupProps) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className={cx(styles.toggleButtonGroup, className)}
    >
      {children}
    </RadioGroup>
  )
}
