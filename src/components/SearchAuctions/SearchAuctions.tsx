'use client'
import { SelectBox } from '@/ui/SelectBox/SelectBox'
import { cx } from 'class-variance-authority'
import { useState } from 'react'

const colors = [{ name: 'Red' }, { name: 'Blue' }, { name: 'Green' }]

import styles from './SearchAuctions.module.css'

export function SearchAuctions() {
  const [selected, setSelected] = useState<{ name: string } | undefined>()
  return (
    <section>
      <SelectBox
        placeholder="Colors"
        selected={selected}
        setSelected={setSelected}
        label="Open"
      >
        {colors.map((color) => (
          <SelectBox.Option key={color.name} value={color}>
            <span className={cx(styles.dot, styles[color.name])}></span>
            {color.name}
          </SelectBox.Option>
        ))}
      </SelectBox>
    </section>
  )
}
