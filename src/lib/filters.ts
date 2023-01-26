import { FiltersType } from '@/context/SearchAuctionsContext'
import { Auction } from '@/types/auctions'

export function filterAuctions(auctions: Auction[], filters: FiltersType) {
  let pipeline = pipe<Auction[]>(
    filterBy(filters),
    orderByCreation(filters),
    //orderByLikes(filters),
  )
  return pipeline(auctions)
}

function orderByCreation(filters: FiltersType) {
  return function sort(auctions: Auction[]) {
    let orderBy = filters.orderBy
    return auctions.sort((auctionA, auctionB) => {
      let createdAtA = new Date(auctionA.createdAt).getTime()
      let createdAtB = new Date(auctionB.createdAt).getTime()
      if (orderBy === 'newest') {
        return createdAtB - createdAtA
      }
      return createdAtA - createdAtB
    })
  }
}

/*
 * All the auctions are grouped by createdAt, then sorted by likes.
 * But none of the auctions have the same createdAt, so this have no effect.
 */
function orderByLikes(filters: FiltersType) {
  return function sort(auctions: Auction[]) {
    let likes = filters.likes

    // Group auctions by createdAt
    let groupByCreatedAt = auctions.reduce((acc, auction) => {
      let createdAt = String(new Date(auction.createdAt).getTime())
      if (typeof acc[createdAt] == 'undefined') {
        acc[createdAt] = []
      }
      acc[createdAt].push(auction)
      return acc
    }, {} as { [key: string]: Auction[] })

    // Sort auctions by likes
    let sortedAuctions = Object.values(groupByCreatedAt).map((auctions) => {
      let sorted = auctions.sort(mostLiked)
      return likes === 'most-liked' ? sorted : sorted.reverse()
    })

    // Flatten array
    return sortedAuctions.flatMap((auctions) => auctions)
  }
}

function mostLiked(auctionA: Auction, auctionB: Auction) {
  if (auctionB.likes - auctionA.likes > 0) {
    return 1
  } else if (auctionB.likes - auctionA.likes < 0) {
    return -1
  }
  return 0
}

function filterBy(filters: FiltersType) {
  return function filter(auctions: Auction[]) {
    return auctions.filter((auction) => {
      return (
        filterByCategory(filters.category, auction) &&
        filterByPriceRange(filters.priceRange, auction) &&
        filterByColor(filters.colors, auction) &&
        filterBySearchKey(filters.searchKey, auction)
      )
    })
  }
}

function filterByCategory(category: FiltersType['category'], auction: Auction) {
  return category === 'all-items'
    ? true
    : auction.type.toLowerCase() === category
}

function filterByPriceRange(
  priceRange: FiltersType['priceRange'],
  auction: Auction,
) {
  let instantPrice = auction.instantPrice.split(' ')[0]
  return Number(instantPrice) <= priceRange
}

function filterByColor(color: FiltersType['colors'], auction: Auction) {
  return color === 'all'
    ? true
    : auction.attributes.color.toLowerCase() === color
}

function filterBySearchKey(
  searchKey: FiltersType['searchKey'],
  auction: Auction,
) {
  return searchKey === ''
    ? true
    : auction.author.toLowerCase().includes(searchKey.toLowerCase())
}

function pipe<T>(...fns: Function[]) {
  return (x: T) => fns.reduce((v, f) => f(v), x)
}
