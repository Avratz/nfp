'use client'
import { cva, cx } from 'class-variance-authority'
import { useId, InputHTMLAttributes } from 'react'
import { Icon, IconsName } from '@/ui/Icon/Icon'

import styles from './Input.module.css'

const inputStyles = cva(styles.input, {
  variants: {
    intent: {
      base: styles.base,
      blank: styles.blank,
    },
  },
  defaultVariants: {
    intent: 'base',
  },
})

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  intent?: 'base' | 'blank'
  label?: string
  icon?: {
    slot: 'left' | 'right'
    name: IconsName
  }
}

export function Input({
  intent,
  label,
  className = '',
  icon,
  id,
  ...props
}: InputProps) {
  const _id = useId()
  return (
    <>
      <label htmlFor={id || _id} className={cx(styles.inputLabel, className)}>
        {label ? label : null}
        <div className={styles.inputWrapper}>
          {icon?.slot === 'left' && icon?.name !== undefined ? (
            <Icon
              name={icon?.name}
              className={cx(styles.icon, styles.iconLeft)}
            />
          ) : null}
          <input
            className={inputStyles({
              intent,
              className:
                icon?.slot === 'left' ? styles.inputLeft : styles.inputRight,
            })}
            id={id || _id}
            type="text"
            {...props}
          />
          {icon?.slot === 'right' && icon?.name !== undefined ? (
            <Icon
              name={icon?.name}
              className={cx(styles.icon, styles.iconRight)}
            />
          ) : null}
        </div>
      </label>
    </>
  )
}
