type FetcherCacheType = {
  cache?: RequestCache
  next?: NextFetchRequestConfig
}

type FetcherConfigType = {
  method?: 'GET' | 'POST'
  apiKey?: string
  cache?: FetcherCacheType
  body?: {}
  baseUrl?: string
}

export async function fetcher<T>(
  url: string,
  {
    method = 'GET',
    apiKey = '',
    cache = {},
    body = {},
    baseUrl = 'api',
  }: FetcherConfigType,
) {
  try {
    const res = await fetch((process.env.API_URL || baseUrl) + url, {
      method,
      ...(method === 'POST' ? { body: JSON.stringify(body) } : {}),
      cache: cache.cache,
      next: cache.next,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apiKey,
      },
    })
    let responseData = res
    if (!res.ok) {
      throw responseData
    }

    responseData = await res.json()

    return responseData as T
  } catch (error) {
    throw error
  }
}

export function getWithCacheRevalidationIn(revalidate: number) {
  return function get<T>(url: string, apiKey: string) {
    return fetcher<T>(url, { apiKey, cache: { next: { revalidate } } })
  }
}

export const getCachedOneMinute: <T>(
  url: string,
  apiKey: string,
) => Promise<T> = getWithCacheRevalidationIn(60)
