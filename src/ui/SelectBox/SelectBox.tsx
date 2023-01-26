'use client'
import { Listbox } from '@headlessui/react'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'
import { Icon } from '../Icon/Icon'

import styles from './SelectBox.module.css'

type SelectBoxProps = {
  placeholder: string
  selected?: { name: string; value: string }
  setSelected: (selected: { name: string; value: string }) => void
  children: ReactNode
  label?: string
  className?: string
}

export function SelectBox({
  placeholder,
  selected,
  setSelected,
  children,
  label,
  className,
}: SelectBoxProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={cx(styles.selectBox, className)}>
        {label ? (
          <Listbox.Label className={styles.label}>{label}</Listbox.Label>
        ) : null}
        <Listbox.Button className={styles.button}>
          <span>{selected?.name || placeholder}</span>
          <span className={styles.icon}>
            <Icon name="arrowDown" size="xs" />
          </span>
        </Listbox.Button>

        <Listbox.Options className={styles.options}>{children}</Listbox.Options>
      </div>
    </Listbox>
  )
}

export function OptionBox({
  children,
  value,
  className = '',
}: {
  children: ReactNode
  value: { name: string; value: string }
  className?: string
}) {
  return (
    <Listbox.Option
      value={value}
      className={({ active, selected }) =>
        cx(
          styles.option,
          active && !selected ? styles.active : '',
          selected ? styles.selected : '',
          className,
        )
      }
    >
      {children}
    </Listbox.Option>
  )
}
