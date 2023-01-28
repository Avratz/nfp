import {
  orderByCreation,
  filterByCategory,
  filterByPriceRange,
  filterByColor,
  filterBySearchKey,
} from './filters'
import { allAuctions } from '@/__mocks__/auctions'
import { filtersInitialState } from '@/context/SearchAuctionsContext'

describe('orderByCreation', () => {
  it('should sort auctions by creation date (newest)', () => {
    const filters = {
      ...filtersInitialState,
      orderBy: 'newest' as 'newest' | 'oldest',
    }
    const sortedAuctions = orderByCreation(filters)(allAuctions)
    expect(sortedAuctions[6].id).toBe(12)
    expect(sortedAuctions[7].id).toBe(11)
    expect(sortedAuctions[8].id).toBe(10)
    expect(sortedAuctions[9].id).toBe(20)
    expect(sortedAuctions[10].id).toBe(17)
  })

  it('should sort auctions by creation date (oldest)', () => {
    const filters = {
      ...filtersInitialState,
      orderBy: 'oldest' as 'newest' | 'oldest',
    }
    const sortedAuctions = orderByCreation(filters)(allAuctions)
    expect(sortedAuctions[0].id).toBe(17)
    expect(sortedAuctions[1].id).toBe(20)
    expect(sortedAuctions[2].id).toBe(10)
    expect(sortedAuctions[3].id).toBe(11)
    expect(sortedAuctions[4].id).toBe(12)
  })
})

describe('filterByCategory', () => {
  it('should filter auctions by art', () => {
    const filteredAuctionsArt = allAuctions.filter((auction) =>
      filterByCategory('art' as 'all-items' | 'art' | 'photography', auction),
    )
    expect(filteredAuctionsArt.length).toBe(7)
  })

  it('should filter auctions by photography', () => {
    const filteredAuctionsPhotography = allAuctions.filter((auction) =>
      filterByCategory(
        'photography' as 'all-items' | 'art' | 'photography',
        auction,
      ),
    )
    expect(filteredAuctionsPhotography.length).toBe(4)
  })

  it('should filter auctions by all-items', () => {
    const filteredAuctionsAllItems = allAuctions.filter((auction) =>
      filterByCategory(
        'all-items' as 'all-items' | 'art' | 'photography',
        auction,
      ),
    )
    expect(filteredAuctionsAllItems.length).toBe(11)
  })
})

describe('filterByPriceRange', () => {
  it('should filter auctions by price < 3', () => {
    const filteredAuctionsPriceRange = allAuctions.filter((auction) =>
      filterByPriceRange(3, auction),
    )
    expect(filteredAuctionsPriceRange.length).toBe(8)
  })

  it('should filter auctions by price < 11', () => {
    const filteredAuctionsPriceRange = allAuctions.filter((auction) =>
      filterByPriceRange(11, auction),
    )
    expect(filteredAuctionsPriceRange.length).toBe(11)
  })

  it('should filter auctions by price < 0', () => {
    const filteredAuctionsPriceRange = allAuctions.filter((auction) =>
      filterByPriceRange(0, auction),
    )
    expect(filteredAuctionsPriceRange.length).toBe(0)
  })
})

describe('filterByColor', () => {
  it('should filter auctions by color red', () => {
    const filteredAuctionsColor = allAuctions.filter((auction) =>
      filterByColor('red', auction),
    )
    expect(filteredAuctionsColor.length).toBe(1)
  })

  it('should filter auctions by color black', () => {
    const filteredAuctionsColor = allAuctions.filter((auction) =>
      filterByColor('black', auction),
    )
    expect(filteredAuctionsColor.length).toBe(4)
  })

  it('should filter auctions by color all', () => {
    const filteredAuctionsColor = allAuctions.filter((auction) =>
      filterByColor('all', auction),
    )
    expect(filteredAuctionsColor.length).toBe(11)
  })
})

describe('filterBySearchKey', () => {
  it('should filter auctions by searchKey ""', () => {
    const filteredAuctionsSearchKey = allAuctions.filter((auction) =>
      filterBySearchKey('', auction),
    )
    expect(filteredAuctionsSearchKey.length).toBe(11)
  })

  it('should filter auctions by searchKey "asdasdasd"', () => {
    const filteredAuctionsSearchKey = allAuctions.filter((auction) =>
      filterBySearchKey('asdasdasd', auction),
    )
    expect(filteredAuctionsSearchKey.length).toBe(0)
  })

  it('should filter auctions by searchKey "Fernando Medina"', () => {
    const filteredAuctionsSearchKey = allAuctions.filter((auction) =>
      filterBySearchKey('Fernando Medina', auction),
    )
    expect(filteredAuctionsSearchKey.length).toBe(1)
  })
})
