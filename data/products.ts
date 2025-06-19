import { Product, Category } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'HAMAK OGRODOWY BRAZYLIJSKI PODUSZKA 200CM',
    price: 49.99,
    originalPrice: 79.99,
    imageUrl: 'https://placehold.co/300x300/87CEEB/333?text=HAMAK',
    rating: 4.8,
    reviewCount: 1245,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'dom-ogrod-24',
    discount: 38,
    features: ['Darmowa dostawa', 'Zwrot do 30 dni']
  },
  {
    id: 2,
    name: 'KOSZYK NA PIKNIK Z WIKLINY PREZENT KOSZ',
    price: 149.99,
    imageUrl: 'https://placehold.co/300x300/DEB887/333?text=KOSZYK',
    rating: 4.7,
    reviewCount: 892,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'piknik-expert',
    features: ['Darmowa dostawa']
  },
  {
    id: 3,
    name: 'DONICZKA OSŁONKA BIAŁA CERAMICZNA 12CM',
    price: 55.00,
    originalPrice: 89.99,
    imageUrl: 'https://placehold.co/300x300/F5F5F5/333?text=DONICZKA',
    rating: 4.9,
    reviewCount: 456,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'ceramika-polska',
    discount: 39,
    features: ['Gwarancja najniższej ceny']
  },
  {
    id: 4,
    name: 'ZESTAW FOREMEK SILIKONOWYCH LODY 6SZT',
    price: 34.00,
    imageUrl: 'https://placehold.co/300x300/FFB6C1/333?text=FOREMKI',
    rating: 4.8,
    reviewCount: 1123,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'kuchnia-akcesoria',
    features: ['Darmowa dostawa']
  },
  {
    id: 5,
    name: 'WACHLARZ HISZPAŃSKI PRZYCISK RAKIETA',
    price: 89.99,
    imageUrl: 'https://placehold.co/300x300/FFD700/333?text=WACHLARZ',
    rating: 4.6,
    reviewCount: 234,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'hiszpania-import',
    features: ['Darmowa dostawa']
  },
  {
    id: 6,
    name: 'MATERAC DMUCHANY DO PŁYWANIA AVOCADO',
    price: 48.85,
    imageUrl: 'https://placehold.co/300x300/98FB98/333?text=MATERAC',
    rating: 4.9,
    reviewCount: 678,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'basen-akcesoria',
    features: ['Darmowa dostawa']
  },
  {
    id: 7,
    name: 'HULAJNOGA ELEKTRYCZNA XIAOMI M365 PRO',
    price: 1290.00,
    imageUrl: 'https://placehold.co/300x300/696969/333?text=HULAJNOGA',
    rating: 4.7,
    reviewCount: 1890,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'elektro-mobilność',
    features: ['Bezpłatna dostawa i zwrot']
  },
  {
    id: 8,
    name: 'LAMPKA OGRODOWA SOLARNA LED 5M',
    price: 249.00,
    originalPrice: 349.99,
    imageUrl: 'https://placehold.co/300x300/FFFF00/333?text=LAMPKA',
    rating: 4.8,
    reviewCount: 567,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'ogród-solar',
    discount: 29,
    features: ['Darmowa dostawa']
  },
  {
    id: 9,
    name: 'LEŻAK OGRODOWY ALUMINIUM SKŁADANY',
    price: 129.99,
    imageUrl: 'https://placehold.co/300x300/8FBC8F/333?text=LEŻAK',
    rating: 4.6,
    reviewCount: 345,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'meble-ogrodowe',
    features: ['Darmowa dostawa']
  },
  {
    id: 10,
    name: 'MISKA CAMPING ZESTAW TURYSTYCZNY',
    price: 45.00,
    imageUrl: 'https://placehold.co/300x300/CD853F/333?text=MISKA',
    rating: 4.7,
    reviewCount: 456,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'camping-expert',
    features: ['Darmowa dostawa']
  },
  {
    id: 11,
    name: 'IPHONE 16',
    price: 5200.00,
    imageUrl: 'https://placehold.co/300x300/CD853F/333?text=IPHONE',
    rating: 5.0,
    reviewCount: 453,
    isSmart: false,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'camping-expert',
    features: ['Darmowa dostawa']
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Dostawa już od 9 zł',
    icon: '📦',
    imageUrl: 'https://placehold.co/100x100/4169E1/FFF?text=SMART',
    isPromoted: true
  },
  {
    id: 2,
    name: 'Motoryzacja',
    icon: '🚗',
    imageUrl: 'https://placehold.co/100x100/FF6347/FFF?text=AUTO'
  },
  {
    id: 3,
    name: 'Dom i ogród',
    icon: '🏠',
    imageUrl: 'https://placehold.co/100x100/32CD32/FFF?text=DOM'
  },
  {
    id: 4,
    name: 'Moda',
    icon: '👗',
    imageUrl: 'https://placehold.co/100x100/FF69B4/FFF?text=MODA'
  },
  {
    id: 5,
    name: 'Elektronika',
    icon: '💻',
    imageUrl: 'https://placehold.co/100x100/1E90FF/FFF?text=TECH'
  },
  {
    id: 6,
    name: 'Sport i turystyka',
    icon: '⚽',
    imageUrl: 'https://placehold.co/100x100/FF4500/FFF?text=SPORT'
  },
  {
    id: 7,
    name: 'Dziecko',
    icon: '🧸',
    imageUrl: 'https://placehold.co/100x100/FFD700/FFF?text=DZIECI'
  },
  {
    id: 8,
    name: 'Supermarket',
    icon: '🛒',
    imageUrl: 'https://placehold.co/100x100/8A2BE2/FFF?text=MARKET'
  },
  {
    id: 9,
    name: 'Zdrowie',
    icon: '💊',
    imageUrl: 'https://placehold.co/100x100/00CED1/FFF?text=ZDROWIE'
  },
  {
    id: 10,
    name: 'Kolekcje i sztuka',
    icon: '🎨',
    imageUrl: 'https://placehold.co/100x100/DA70D6/FFF?text=SZTUKA'
  },
  {
    id: 11,
    name: 'Uroda',
    icon: '💄',
    imageUrl: 'https://placehold.co/100x100/FF1493/FFF?text=URODA'
  },
  {
    id: 12,
    name: 'Firma i usługi',
    icon: '🏢',
    imageUrl: 'https://placehold.co/100x100/708090/FFF?text=FIRMA'
  }
];
