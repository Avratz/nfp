import { RadioGroup } from '@headlessui/react'

import styles from './ToggleButtonGroup.module.css'

type ToggleButtonGroupProps = {
  value: string
  onChange: (value: string) => void
  children: React.ReactNode
}

export function ToggleButtonGroup({
  value,
  onChange,
  children,
}: ToggleButtonGroupProps) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className={styles.toggleButtonGroup}
    >
      {children}
    </RadioGroup>
  )
}
