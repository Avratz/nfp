'use client'
import { Container } from '@/ui/Container/Container'
import { Input } from '@/ui/Input/Input'
import { Range } from '@/ui/Range/Range'
import { SelectBox } from '@/ui/SelectBox/SelectBox'
import { ToggleButton } from '@/ui/ToggleButton/ToggleButton'
import { ToggleButtonGroup } from '@/ui/ToggleButtonGroup/ToggleButtonGroup'
import { cx } from 'class-variance-authority'
import { useState } from 'react'

const colors = [{ name: 'Red' }, { name: 'Blue' }, { name: 'Green' }]

import styles from './SearchAuctions.module.css'

export function SearchAuctions() {
  const [selected, setSelected] = useState<{ name: string } | undefined>()
  return (
    <Container as="section">
      <Input placeholder="Search" icon={{ slot: 'right', name: 'search' }} />
      <SelectBox
        placeholder="Recently added"
        selected={selected}
        setSelected={setSelected}
      >
        hola
      </SelectBox>

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
      <ToggleButtonGroup value="all-items" onChange={(value) => null}>
        <ToggleButton value="all-items">All Items</ToggleButton>
        <ToggleButton value="art">Art</ToggleButton>
        <ToggleButton value="photography">Photography</ToggleButton>
      </ToggleButtonGroup>
      <Range min={0.01} max={10} step={0.01} unit="ETH" label="Price Range" />
    </Container>
  )
}
