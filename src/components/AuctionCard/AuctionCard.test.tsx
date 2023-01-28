import { render } from '@testing-library/react'
import { AuctionCard } from './AuctionCard'

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

const auction = allAuctions[0]
describe('AuctionCard', () => {
  it('renders AuctionCard', () => {
    let { container } = render(
      <AuctionCard
        image={auction.media.image}
        author={auction.author}
        instantPrice={auction.instantPrice}
        stock={auction.stock}
        highestBid={auction.highestBid}
        bidUsers={auction.bidUsers}
        attributeType={auction.attributes.type}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
