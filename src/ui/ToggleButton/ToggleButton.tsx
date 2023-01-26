import { RadioGroup } from '@headlessui/react'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import styles from './ToggleButton.module.css'

type ToggleButtonProps = {
  value: string
  children: ReactNode
}

export function ToggleButton({ value, children }: ToggleButtonProps) {
  return (
    <RadioGroup.Option
      value={value}
      className={({ checked }) =>
        cx(styles.toggleButton, checked ? styles.checked : '')
      }
    >
      {children}
    </RadioGroup.Option>
  )
}
