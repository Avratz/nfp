export type Auction = {
  id: number
  instantPrice: string
  highestBid: string
  author: string
  authorAvatar: string
  type: string
  stock: number
  likes: number
  createdAt: Date
  endsAt: Date
  media: {
    id: number
    image: string
    image2x: string
  }
  attributes: {
    id: number
    color: 'black' | 'pink' | 'orange' | 'blue' | 'red'
    type: string
  }
  bidUsers: [
    {
      id: number
      name: string
      avatar: string
    },
  ]
}
