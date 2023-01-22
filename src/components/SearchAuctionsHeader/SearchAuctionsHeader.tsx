import { Input } from '@/ui/Input/Input'
import { SelectBox } from '@/ui/SelectBox/SelectBox'
import { ToggleButton } from '@/ui/ToggleButton/ToggleButton'
import { ToggleButtonGroup } from '@/ui/ToggleButtonGroup/ToggleButtonGroup'

import styles from './SearchAuctionsHeader.module.css'

export function SearchAuctionsHeader() {
  return (
    <header className={styles.header}>
      <Input placeholder="Search" icon={{ slot: 'right', name: 'search' }} />
      <SelectBox placeholder="Newest" setSelected={(value) => null}>
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
    </header>
  )
}
