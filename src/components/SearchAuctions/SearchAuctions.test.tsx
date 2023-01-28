import { render } from '@testing-library/react'
import { SearchAuctions } from './SearchAuctions'
import { allAuctions } from '@/__mocks__/auctions'

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

describe('SearchAuctions', () => {
  it('renders SearchAuctions', () => {
    let { container } = render(<SearchAuctions data={[allAuctions]} />)
    expect(container).toMatchSnapshot()
  })
})
