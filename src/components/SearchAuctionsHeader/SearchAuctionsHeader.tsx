'use client'
import { Divider } from '@/ui/Divider/Divider'
import { Input } from '@/ui/Input/Input'
import { SelectBox } from '@/ui/SelectBox/SelectBox'
import { ToggleButton } from '@/ui/ToggleButton/ToggleButton'
import { ToggleButtonGroup } from '@/ui/ToggleButtonGroup/ToggleButtonGroup'

import styles from './SearchAuctionsHeader.module.css'

export function SearchAuctionsHeader() {
  return (
    <header className={styles.header}>
      <Input
        placeholder="Type to find something nice..."
        className={styles.inputSearch}
        icon={{ slot: 'right', name: 'search', class: styles.searchIcon }}
      />
      <Divider className={styles.divider} />
      <div className={styles.headerFilters}>
        <SelectBox
          placeholder="Newest"
          setSelected={(value) => null}
          className={styles.selectBox}
        >
          Newest Oldest
        </SelectBox>

        <ToggleButtonGroup
          value="all-items"
          onChange={(value) => null}
          className={styles.subNavigation}
        >
          <ToggleButton value="all-items">All Items</ToggleButton>
          <ToggleButton value="art">Art</ToggleButton>
          <ToggleButton value="photography">Photography</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </header>
  )
}
