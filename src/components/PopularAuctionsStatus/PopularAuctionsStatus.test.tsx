import { render, cleanup } from '@testing-library/react'
import { PopularAuctionsStatus } from './PopularAuctionsStatus'
import { Auction } from '@/types/auctions'

jest.mock('@/api/coinPrices', () => ({
  getEthereumPrice: jest.fn(() => Promise.resolve({ usd: 200 })),
}))
jest.mock('@/lib/time', () => ({
  getTimeLeft: jest.fn(() => ({ hours: 1, minutes: 2, seconds: 3 })),
}))
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(() => ({
    isLoading: false,
    isError: false,
    data: {
      usd: 200,
    },
  })),
}))

describe('PopularAuctionsStatus', () => {
  afterEach(() => {
    cleanup()
    jest.resetAllMocks()
  })

  it('should render the component', () => {
    const selectedSlide = {
      highestBid: '1 ETH',
      endsAt: new Date(),
    } as unknown as Auction

    const { container } = render(
      <PopularAuctionsStatus selectedSlide={selectedSlide} />,
    )
    expect(container).toMatchSnapshot()
  })
})
