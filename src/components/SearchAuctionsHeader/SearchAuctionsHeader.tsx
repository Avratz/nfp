'use client'
import { useTransition } from 'react'

import {
  useDispatch,
  useSearchAuctions,
} from '@/hooks/useSearchAuctionsContext'

import { Divider } from '@/ui/Divider/Divider'
import { Input } from '@/ui/Input/Input'
import { OptionBox, SelectBox } from '@/ui/SelectBox/SelectBox'
import { ToggleButton } from '@/ui/ToggleButton/ToggleButton'
import { ToggleButtonGroup } from '@/ui/ToggleButtonGroup/ToggleButtonGroup'

import styles from './SearchAuctionsHeader.module.css'

const orderBy = [
  { name: 'Newest', value: 'newest' },
  { name: 'Oldest', value: 'oldest' },
]

const categories = [
  { name: 'All Items', value: 'all-items' },
  { name: 'Art', value: 'art' },
  { name: 'Photography', value: 'photography' },
]

export function SearchAuctionsHeader() {
  const dispatch = useDispatch()
  const { filters } = useSearchAuctions()
  const [isPending, startTransition] = useTransition()
  return (
    <header className={styles.header}>
      <Input
        placeholder="Type to find something nice..."
        className={styles.inputSearch}
        icon={{ slot: 'right', name: 'search', class: styles.searchIcon }}
        onChange={(event) => {
          const { value } = event.currentTarget
          startTransition(() => {
            dispatch({ type: 'CHANGE_FILTER', payload: { searchKey: value } })
          })
        }}
        key={filters.reset}
      />
      <Divider className={styles.divider} />
      <div className={styles.headerFilters}>
        <SelectBox
          placeholder="Newest"
          setSelected={({ value }) =>
            dispatch({ type: 'CHANGE_FILTER', payload: { orderBy: value } })
          }
          selected={orderBy.find((option) => option.value === filters.orderBy)}
          className={styles.selectBox}
        >
          {orderBy.map((option) => (
            <OptionBox key={option.value} value={option}>
              {option.name}
            </OptionBox>
          ))}
        </SelectBox>

        <ToggleButtonGroup
          value={filters.category}
          onChange={(value) =>
            dispatch({ type: 'CHANGE_FILTER', payload: { category: value } })
          }
          className={styles.subNavigation}
        >
          {categories.map((category) => (
            <ToggleButton key={category.value} value={category.value}>
              {category.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </header>
  )
}
