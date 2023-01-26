import {
  useDispatch,
  useSearchAuctions,
} from '@/hooks/useSearchAuctionsContext'
import { Button } from '@/ui/Button/Button'
import { Divider } from '@/ui/Divider/Divider'
import { Icon } from '@/ui/Icon/Icon'
import { Range } from '@/ui/Range/Range'
import { OptionBox, SelectBox } from '@/ui/SelectBox/SelectBox'
import { cx } from 'class-variance-authority'
import { useTransition } from 'react'

import styles from './SearchAuctionsSidebar.module.css'

const colors = [
  { value: 'all', name: 'All colors' },
  { value: 'black', name: 'Black' },
  { value: 'orange', name: 'Orange' },
  { value: 'blue', name: 'Blue' },
  { value: 'pink', name: 'Pink' },
  { value: 'red', name: 'Red' },
]

const mostLiked = [
  { name: 'Most Liked', value: 'most-liked' },
  { name: 'Least Liked', value: 'least-liked' },
]

export function SearchAuctionsSidebar() {
  const [isPending, startTransition] = useTransition()

  const { filters } = useSearchAuctions()
  const dispatch = useDispatch()

  return (
    <aside className={styles.searchAuctionsSidebar}>
      <Range
        min={0.001}
        max={10.05}
        step={0.001}
        unit="ETH"
        label="Price Range"
        value={filters.priceRange}
        key={filters.reset}
        onInput={(event) => {
          const { value } = event.currentTarget
          startTransition(() => {
            dispatch({
              type: 'CHANGE_FILTER',
              payload: { priceRange: Number(value) },
            })
          })
        }}
      />
      <Divider />
      <SelectBox
        placeholder="Most liked"
        setSelected={({ value }) =>
          dispatch({ type: 'CHANGE_FILTER', payload: { likes: value } })
        }
        selected={mostLiked.find((option) => option.value === filters.likes)}
        label="Likes"
      >
        {mostLiked.map((mostLiked) => (
          <OptionBox key={mostLiked.name} value={mostLiked}>
            {mostLiked.name}
          </OptionBox>
        ))}
      </SelectBox>
      <SelectBox
        placeholder="Colors"
        setSelected={({ value }) =>
          dispatch({ type: 'CHANGE_FILTER', payload: { colors: value } })
        }
        selected={colors.find((option) => option.value === filters.colors)}
        label="Colors"
      >
        {colors.map((color) => (
          <OptionBox key={color.name} value={color} className={styles.option}>
            <span className={cx(styles.dot, styles[color.value])}></span>
            <span className={styles[color.value + '-text']}>{color.name}</span>
          </OptionBox>
        ))}
      </SelectBox>
      <Divider />
      <Button
        intent="blank"
        className={styles.resetButton}
        onClick={() => dispatch({ type: 'RESET_FILTERS', payload: {} })}
      >
        <Icon name="closeCircle" />
        <span>Reset filter</span>
      </Button>
    </aside>
  )
}
