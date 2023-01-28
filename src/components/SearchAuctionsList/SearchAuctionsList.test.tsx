import { render } from '@testing-library/react'
import { SearchAuctionsList } from './SearchAuctionsList'

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
describe('SearchAuctionsList', () => {
  it('renders SearchAuctionsList', () => {
    let { container } = render(<SearchAuctionsList />)
    expect(container).toMatchSnapshot()
  })
})
