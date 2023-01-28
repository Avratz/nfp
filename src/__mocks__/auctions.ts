import { Auction } from '@/types/auctions'

export const allAuctions: Auction[] = [
  {
    id: 10,
    instantPrice: '4.45 ETH',
    highestBid: '0.010 ETH',
    author: 'Fernando Medina',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/07_xrihyb.png',
    type: 'Art',
    stock: 1,
    likes: 2,
    createdAt: '2022-06-05T11:42:33.000Z',
    endsAt: '2022-08-06T11:42:33.000Z',
    media: {
      id: 4,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121559/NFPAISANOS/img_125_mrxfbh.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121559/NFPAISANOS/img_125_mrxfbh.png',
    },
    attributes: {
      id: 4,
      color: 'black',
      type: 'epic',
    },
    bidUsers: [
      {
        id: 6,
        name: 'Sofia Coolen',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/05_rdi4su.png',
      },
      {
        id: 7,
        name: 'Martin Acosta',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/04_uunxgl.png',
      },
    ],
  },
  {
    id: 11,
    instantPrice: '2.45 ETH',
    highestBid: '0.100 ETH',
    author: 'Martin Acosta',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/06_mjddoi.png',
    type: 'Art',
    stock: 3,
    likes: 10,
    createdAt: '2022-06-06T11:42:33.000Z',
    endsAt: '2022-08-06T11:42:33.000Z',
    media: {
      id: 5,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121554/NFPAISANOS/img_131_d7wmyk.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121559/NFPAISANOS/img_125_mrxfbh.png',
    },
    attributes: {
      id: 5,
      color: 'pink',
      type: 'rare',
    },
    bidUsers: [
      {
        id: 8,
        name: 'Nicolas Sieiro',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/02_nqwu5e.png',
      },
      {
        id: 9,
        name: 'Carla Luna',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/03_ifygi0.png',
      },
    ],
  },
  {
    id: 12,
    instantPrice: '2.15 ETH',
    highestBid: '0.500 ETH',
    author: 'Santiago Lopez',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/04_uunxgl.png',
    type: 'Photography',
    stock: 5,
    likes: 10,
    createdAt: '2022-06-07T11:42:33.000Z',
    endsAt: '2022-08-06T11:42:33.000Z',
    media: {
      id: 6,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121551/NFPAISANOS/img_126_ae6zew.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121551/NFPAISANOS/img_126_ae6zew.png',
    },
    attributes: {
      id: 6,
      color: 'orange',
      type: 'uncommon',
    },
    bidUsers: [
      {
        id: 10,
        name: 'Martin Acosta',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/07_xrihyb.png',
      },
      {
        id: 11,
        name: 'Antonella Richieri',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/08_fsbhry.png',
      },
    ],
  },
  {
    id: 13,
    instantPrice: '10.05 ETH',
    highestBid: '1.500 ETH',
    author: 'Santiago Echazu',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/01_qgg62f.png',
    type: 'Art',
    stock: 1,
    likes: 30,
    createdAt: '2022-06-10T11:42:33.000Z',
    endsAt: '2022-08-06T11:42:33.000Z',
    media: {
      id: 7,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121542/NFPAISANOS/img_101_y2iczn.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121542/NFPAISANOS/img_101_y2iczn.png',
    },
    attributes: {
      id: 7,
      color: 'orange',
      type: 'legendary',
    },
    bidUsers: [
      {
        id: 12,
        name: 'Martin Acosta',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/07_xrihyb.png',
      },
      {
        id: 13,
        name: 'Antonella Richieri',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/08_fsbhry.png',
      },
      {
        id: 14,
        name: 'Antonella Richieri',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/08_fsbhry.png',
      },
      {
        id: 15,
        name: 'Martin Acosta',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/07_xrihyb.png',
      },
    ],
  },
  {
    id: 14,
    instantPrice: '1.05 ETH',
    highestBid: '0.40 ETH',
    author: 'Alvaro Echazu',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/02_nqwu5e.png',
    type: 'Art',
    stock: 1,
    likes: 400,
    createdAt: '2022-06-15T11:42:33.000Z',
    endsAt: '2022-08-06T11:42:33.000Z',
    media: {
      id: 8,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121536/NFPAISANOS/img_102_a9rkb7.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121536/NFPAISANOS/img_102_a9rkb7.png',
    },
    attributes: {
      id: 8,
      color: 'black',
      type: 'legendary',
    },
    bidUsers: [
      {
        id: 16,
        name: 'Akira Kaneto',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/04_uunxgl.png',
      },
      {
        id: 17,
        name: 'Facundo Aguinaga',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/04_uunxgl.png',
      },
    ],
  },
  {
    id: 15,
    instantPrice: '1.30 ETH',
    highestBid: '0.022 ETH',
    author: 'Sofia Coolen',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/03_ifygi0.png',
    type: 'Photography',
    stock: 2,
    likes: 14,
    createdAt: '2022-06-20T11:42:33.000Z',
    endsAt: '2022-08-06T11:42:33.000Z',
    media: {
      id: 9,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121534/NFPAISANOS/img_115_lolex4.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121534/NFPAISANOS/img_115_lolex4.png',
    },
    attributes: {
      id: 9,
      color: 'blue',
      type: 'uncommon',
    },
    bidUsers: [
      {
        id: 18,
        name: 'Julian Krupka',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/01_qgg62f.png',
      },
      {
        id: 19,
        name: 'Julian Alvarez',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/04_uunxgl.png',
      },
    ],
  },
  {
    id: 16,
    instantPrice: '6.52 ETH',
    highestBid: '0.031 ETH',
    author: 'Flora Quiroga',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/08_fsbhry.png',
    type: 'Photography',
    stock: 1,
    likes: 201,
    createdAt: '2022-06-30T11:42:33.000Z',
    endsAt: '2022-08-06T11:42:33.000Z',
    media: {
      id: 10,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121534/NFPAISANOS/img_119_o3ouhw.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121534/NFPAISANOS/img_119_o3ouhw.png',
    },
    attributes: {
      id: 10,
      color: 'pink',
      type: 'legendary',
    },
    bidUsers: [
      {
        id: 20,
        name: 'Manuel Torres',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/04_uunxgl.png',
      },
      {
        id: 21,
        name: 'Franco Kaus',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/02_nqwu5e.png',
      },
    ],
  },
  {
    id: 17,
    instantPrice: '0.002 ETH',
    highestBid: '0.00005 ETH',
    author: 'María Del Mar Gestoso',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/03_ifygi0.png',
    type: 'Art',
    stock: 1,
    likes: 0,
    createdAt: '2022-06-01T11:10:33.000Z',
    endsAt: '2022-09-06T11:42:33.000Z',
    media: {
      id: 11,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121534/NFPAISANOS/img_133_slwzia.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121534/NFPAISANOS/img_133_slwzia.png',
    },
    attributes: {
      id: 11,
      color: 'red',
      type: 'uncommon',
    },
    bidUsers: [],
  },
  {
    id: 18,
    instantPrice: '0.028 ETH',
    highestBid: '0.00052 ETH',
    author: 'Julian Cerino',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/01_qgg62f.png',
    type: 'Art',
    stock: 10,
    likes: 5,
    createdAt: '2022-06-14T11:10:33.000Z',
    endsAt: '2022-08-06T11:42:33.000Z',
    media: {
      id: 12,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121534/NFPAISANOS/img_114_d5usms.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121534/NFPAISANOS/img_114_d5usms.png',
    },
    attributes: {
      id: 12,
      color: 'black',
      type: 'rare',
    },
    bidUsers: [
      {
        id: 22,
        name: 'Leo Suarez',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/07_xrihyb.png',
      },
    ],
  },
  {
    id: 19,
    instantPrice: '1.00 ETH',
    highestBid: '0.012 ETH',
    author: 'Martin Russo',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/06_mjddoi.png',
    type: 'Art',
    stock: 1,
    likes: 30,
    createdAt: '2022-06-10T11:10:33.000Z',
    endsAt: '2022-07-06T11:42:33.000Z',
    media: {
      id: 13,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121532/NFPAISANOS/img_122_s2bk3s.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121532/NFPAISANOS/img_122_s2bk3s.png',
    },
    attributes: {
      id: 13,
      color: 'black',
      type: 'legendary',
    },
    bidUsers: [
      {
        id: 23,
        name: 'Juan Lazo',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/07_xrihyb.png',
      },
      {
        id: 24,
        name: 'Exequiel Germano',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/02_nqwu5e.png',
      },
    ],
  },
  {
    id: 20,
    instantPrice: '3.00 ETH',
    highestBid: '0.21 ETH',
    author: 'Belen Lago',
    authorAvatar:
      'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/05_rdi4su.png',
    type: 'Photography',
    stock: 5,
    likes: 15,
    createdAt: '2022-06-03T11:10:33.000Z',
    endsAt: '2022-07-06T11:42:33.000Z',
    media: {
      id: 14,
      image:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1000/v1657121534/NFPAISANOS/img_104_zklzrv.png',
      image2x:
        'https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,w_1500/v1657121534/NFPAISANOS/img_104_zklzrv.png',
    },
    attributes: {
      id: 14,
      color: 'orange',
      type: 'rare',
    },
    bidUsers: [
      {
        id: 25,
        name: 'Nacho Margulies',
        avatar:
          'https://res.cloudinary.com/dvmll0ruo/image/upload/v1657153929/NFPAISANOS/07_xrihyb.png',
      },
    ],
  },
]
