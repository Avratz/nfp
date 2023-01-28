import { Auction } from '@/types/auctions'
import { createContext, ReactNode, useMemo, useReducer } from 'react'
import produce from 'immer'
import { filterAuctions } from '@/lib/filters'

export type FiltersType = {
  searchKey: string
  orderBy: 'newest' | 'oldest'
  category: 'all-items' | 'art' | 'photography'
  priceRange: number
  likes: 'most-liked' | 'least-liked'
  colors: Auction['attributes']['color'] | 'all'
  reset: number
}

type SearchAuctionsContextType = {
  children: ReactNode
  allAuctions: Auction[]
}

export type InitialStateType = typeof initialState

type Action = {
  type: 'RESET_FILTERS' | 'CHANGE_FILTER'
  payload: {
    [key: string]: FiltersType[keyof FiltersType]
  }
}

export const filtersInitialState: FiltersType = {
  searchKey: '',
  orderBy: 'newest',
  category: 'all-items',
  priceRange: 10.05,
  likes: 'most-liked',
  colors: 'all',
  reset: 0,
}

const initialState = {
  auctions: [] as Auction[],
  allAuctionsMemoized: [] as Auction[],
  filters: filtersInitialState,
}

export const SearchAuctionsContext = createContext({
  state: initialState,
  dispatch: (action: Action) => {},
})

export const reducer = produce((draft: InitialStateType, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case 'RESET_FILTERS':
      draft.filters = {
        ...filtersInitialState,
        reset: draft.filters.reset + 1,
      }
      draft.auctions = filterAuctions(draft.allAuctionsMemoized, draft.filters)
    case 'CHANGE_FILTER':
      draft.filters = {
        ...draft.filters,
        ...payload,
      }
      draft.auctions = filterAuctions(draft.allAuctionsMemoized, draft.filters)
      return draft
    default:
      return draft
  }
})

export function SearchAuctionsProvider({
  children,
  allAuctions,
}: SearchAuctionsContextType) {
  const allAuctionsMemoized = useMemo(
    () => filterAuctions(allAuctions, filtersInitialState),
    [allAuctions],
  )

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    auctions: allAuctionsMemoized,
    allAuctionsMemoized,
  })

  return (
    <SearchAuctionsContext.Provider
      value={{
        state: Object.freeze(state),
        dispatch,
      }}
    >
      {children}
    </SearchAuctionsContext.Provider>
  )
}
