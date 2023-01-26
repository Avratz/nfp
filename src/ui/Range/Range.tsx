import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import styles from './Range.module.css'

interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  unit: string
  value?: number
  min: number
  max: number
}

export function Range({
  label,
  unit,
  onInput,
  value,
  min,
  max,
  ...props
}: RangeProps) {
  const [selectedValue, setSelectedValue] = useState<number>(value || max / 2)

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    let value = Number(e.currentTarget.value)
    setSelectedValue(value)

    if (onInput) {
      onInput(e)
    }
  }

  return (
    <label className={styles.rangeContainer}>
      <div className={styles.label}>{label ? label : null}</div>
      <div className={styles.rangeBox}>
        <input
          type="range"
          className={styles.inputRange}
          onInput={handleInput}
          value={value}
          min={min}
          max={max}
          {...props}
        />
        <div className={styles.track}></div>
        <div
          className={styles.progress}
          style={{
            background: calculateLinearGradient(
              calculatePercentage(selectedValue, max),
            ),
          }}
        ></div>
        <div
          className={styles.dot}
          style={{
            left: calculatePercentage(selectedValue, max),
            transform: `translateX(-${calculatePercentage(
              selectedValue,
              max,
            )})`,
          }}
        >
          <div className={styles.tooltip}>{selectedValue} ETH</div>
        </div>
      </div>

      <datalist className={styles.units}>
        <option label={`${min} ${unit}`} />
        <option label={`${max} ${unit}`} />
      </datalist>
    </label>
  )
}

function calculatePercentage(value: number, total: number) {
  let percentage = (value * 100) / total ?? 50
  return percentage + '%'
}

function calculateLinearGradient(percentage: string) {
  return `linear-gradient(to right, var(--accent) 0%, var(--accent) ${percentage}, var(--neutral-3) ${percentage}, var(--neutral-3) 100%)`
}
