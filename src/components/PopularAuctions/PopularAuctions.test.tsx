import { render } from '@testing-library/react'
import { PopularAuctions } from './PopularAuctions'

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

const firstThreeAuctions = allAuctions.slice(0, 3)
describe('PopularAuctions', () => {
  it('renders PopularAuctions', () => {
    let { container } = render(<PopularAuctions data={[firstThreeAuctions]} />)
    expect(container).toMatchSnapshot()
  })
})
