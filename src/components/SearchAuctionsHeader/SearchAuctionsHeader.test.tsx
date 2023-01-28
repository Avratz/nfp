import { render } from '@testing-library/react'
import { SearchAuctionsHeader } from './SearchAuctionsHeader'

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
describe('SearchAuctionsHeader', () => {
  it('renders SearchAuctionsHeader', () => {
    let { container } = render(<SearchAuctionsHeader />)
    expect(container).toMatchSnapshot()
  })
})
