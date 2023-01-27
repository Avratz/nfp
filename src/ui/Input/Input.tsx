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
    class?: string
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
      <label htmlFor={id || _id} className={styles.inputLabel}>
        {label ? label : null}
        <div className={styles.inputWrapper}>
          {icon?.slot === 'left' && icon?.name !== undefined ? (
            <Icon
              name={icon?.name}
              className={cx(styles.icon, styles.iconLeft, icon.class)}
            />
          ) : null}
          <input
            className={inputStyles({
              intent,
              className: cx(
                icon?.slot === 'left'
                  ? styles.inputLeft
                  : icon?.slot === 'right'
                  ? styles.inputRight
                  : null,
                className,
              ),
            })}
            id={id || _id}
            type="text"
            {...props}
          />
          {icon?.slot === 'right' && icon?.name !== undefined ? (
            <Icon
              name={icon?.name}
              className={cx(styles.icon, styles.iconRight, icon.class)}
            />
          ) : null}
        </div>
      </label>
    </>
  )
}
