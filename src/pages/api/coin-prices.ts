import { fetcher } from '@/lib/fetcher'
import { EthereumPrice } from '@/types/prices'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EthereumPrice>,
) {
  switch (req.method) {
    case 'GET': {
      const { coin } = req.query
      if (coin !== 'eth') {
        return res.status(400).end(`Coin ${coin} not supported`)
      }

      const data: {
        usd: string
        eth: string
      } = await fetcher('/eth-price', {
        apiKey: process.env.API_KEY as string,
      })

      let ethUsd = Number(data.usd.replace(',', ''))
      return res.status(200).json({
        usd: ethUsd,
        eth: 1,
      })
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  }
}
