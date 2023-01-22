import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'
import { Range } from '@/ui/Range/Range'
import { SelectBox } from '@/ui/SelectBox/SelectBox'
import { cx } from 'class-variance-authority'

import styles from './SearchAuctionsSidebar.module.css'

const colors = [
  { name: 'Red', value: 'red' },
  { name: 'Blue', value: 'blue' },
  { name: 'Green', value: 'green' },
]

export function SearchAuctionsSidebar() {
  return (
    <aside className={styles.searchAuctionsSidebar}>
      <Range min={0.01} max={10} step={0.01} unit="ETH" label="Price Range" />
      <div className={styles.divider}></div>
      <SelectBox
        placeholder="Most liked"
        setSelected={(value) => null}
        label="Likes"
      >
        <SelectBox.Option value="most-liked">Most Liked</SelectBox.Option>
        <SelectBox.Option value="least-liked">Least Liked</SelectBox.Option>
      </SelectBox>
      <SelectBox
        placeholder="Colors"
        setSelected={(value) => null}
        label="Open"
      >
        {colors.map((color) => (
          <SelectBox.Option key={color.name} value={color}>
            <span className={cx(styles.dot, styles[color.name])}></span>
            {color.name}
          </SelectBox.Option>
        ))}
      </SelectBox>
      <div className={styles.divider}></div>
      <Button intent="blank" className={styles.resetButton}>
        <Icon name="closeCircle" />
        <span>Reset filter</span>
      </Button>
    </aside>
  )
}
