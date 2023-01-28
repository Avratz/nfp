import { render } from '@testing-library/react'
import { PopularAuctionsActionButtons } from './PopularAuctionsActionButtons'

jest.mock('@/ui/Icon/Icon', () => {
  function Icon() {
    return <div></div>
  }

  Icon.displayName = 'Icon'
  return {
    __esModule: true,
    Icon,
  }
})
describe('PopularAuctionsActionButtons', () => {
  it('renders PopularAuctionsActionButtons', () => {
    let { container } = render(<PopularAuctionsActionButtons highestBid="50" />)
    expect(container).toMatchSnapshot()
  })
})
