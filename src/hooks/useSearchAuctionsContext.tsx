import { SearchAuctionsContext } from '@/context/SearchAuctionsContext'

import { useContext } from 'react'

export function useSearchAuctions() {
  const { state } = useContext(SearchAuctionsContext)
  return {
    auctions: state.auctions,
    filters: state.filters,
  }
}

export function useDispatch() {
  const { dispatch } = useContext(SearchAuctionsContext)
  return dispatch
}
