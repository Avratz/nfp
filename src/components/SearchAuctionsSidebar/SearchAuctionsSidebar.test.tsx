import { render } from '@testing-library/react'
import { SearchAuctionsSidebar } from './SearchAuctionsSidebar'

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

describe('SearchAuctionsSidebar', () => {
  it('renders SearchAuctionsSidebar', () => {
    let { container } = render(<SearchAuctionsSidebar />)
    expect(container).toMatchSnapshot()
  })
})
