import { RadioGroup } from '@headlessui/react'
import { cx } from 'class-variance-authority'

import styles from './ToggleButton.module.css'

type ToggleButtonProps = {
  value: string
  children: React.ReactNode
}

export function ToggleButton({ value, children }: ToggleButtonProps) {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <span
          className={cx(styles.toggleButton, checked ? styles.checked : '')}
        >
          {children}
        </span>
      )}
    </RadioGroup.Option>
  )
}
