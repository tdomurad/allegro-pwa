import { Product, Category } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'HAMAK OGRODOWY BRAZYLIJSKI PODUSZKA 200CM',
    price: 49.99,
    originalPrice: 79.99,
    imageUrl: 'https://picsum.photos/seed/hamak/300/300', // <-- ZMIANA
    rating: 4.8,
    reviewCount: 1245,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'dom-ogrod-24',
    discount: 38,
    features: ['Darmowa dostawa', 'Zwrot do 30 dni'],
    categoryID: 3
  },
  {
    id: 2,
    name: 'KOSZYK NA PIKNIK Z WIKLINY PREZENT KOSZ',
    price: 149.99,
    imageUrl: 'https://picsum.photos/seed/koszyk/300/300', // <-- ZMIANA
    rating: 4.7,
    reviewCount: 892,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'piknik-expert',
    features: ['Darmowa dostawa'],
    categoryID: 6
  },
  {
    id: 3,
    name: 'DONICZKA OSŁONKA BIAŁA CERAMICZNA 12CM',
    price: 55.00,
    originalPrice: 89.99,
    imageUrl: 'https://picsum.photos/seed/doniczka/300/300',
    rating: 4.9,
    reviewCount: 456,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'ceramika-polska',
    discount: 39,
    features: ['Gwarancja najniższej ceny'],
    categoryID: 3
  },
  {
    id: 4,
    name: 'ZESTAW FOREMEK SILIKONOWYCH LODY 6SZT',
    price: 34.00,
    imageUrl: 'https://picsum.photos/seed/foremki/300/300',
    rating: 4.8,
    reviewCount: 1123,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'kuchnia-akcesoria',
    features: ['Darmowa dostawa'],
    categoryID: 3
  },
  {
    id: 5,
    name: 'WACHLARZ HISZPAŃSKI PRZYCISK RAKIETA',
    price: 89.99,
    imageUrl: 'https://picsum.photos/seed/wachlarz/300/300',
    rating: 4.6,
    reviewCount: 234,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'hiszpania-import',
    features: ['Darmowa dostawa'],
    categoryID: 4
  },
  {
    id: 6,
    name: 'MATERAC DMUCHANY DO PŁYWANIA AVOCADO',
    price: 48.85,
    imageUrl: 'https://picsum.photos/seed/materac/300/300',
    rating: 4.9,
    reviewCount: 678,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'basen-akcesoria',
    features: ['Darmowa dostawa'],
    categoryID: 3
  },
  {
    id: 7,
    name: 'HULAJNOGA ELEKTRYCZNA XIAOMI M365 PRO',
    price: 1290.00,
    imageUrl: 'https://picsum.photos/seed/hulajnoga/300/300',
    rating: 4.7,
    reviewCount: 1890,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'elektro-mobilność',
    features: ['Bezpłatna dostawa i zwrot'],
    categoryID: 5
  },
  {
    id: 8,
    name: 'LAMPKA OGRODOWA SOLARNA LED 5M',
    price: 249.00,
    originalPrice: 349.99,
    imageUrl: 'https://picsum.photos/seed/lampka/300/300',
    rating: 4.8,
    reviewCount: 567,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'ogród-solar',
    discount: 29,
    features: ['Darmowa dostawa'],
    categoryID: 3
  },
  {
    id: 9,
    name: 'LEŻAK OGRODOWY ALUMINIUM SKŁADANY',
    price: 129.99,
    imageUrl: 'https://picsum.photos/seed/lezak/300/300',
    rating: 4.6,
    reviewCount: 345,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'meble-ogrodowe',
    features: ['Darmowa dostawa'],
    categoryID: 3
  },
  {
    id: 10,
    name: 'MISKA CAMPING ZESTAW TURYSTYCZNY',
    price: 45.00,
    imageUrl: 'https://picsum.photos/seed/miska/300/300',
    rating: 4.7,
    reviewCount: 456,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'camping-expert',
    features: ['Darmowa dostawa'],
    categoryID: 3
  },
  {
    id: 11,
    name: 'IPHONE 16',
    price: 5200.00,
    imageUrl: 'https://picsum.photos/seed/iphone/300/300',
    rating: 5.0,
    reviewCount: 453,
    isSmart: true,
    hasSmartPrice: true,
    deliveryInfo: 'dostawa we wtorek',
    seller: 'camping-expert',
    features: ['Darmowa dostawa'],
    categoryID: 5
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Dostawa już od 9 zł',
    icon: '📦',
    imageUrl: 'https://picsum.photos/seed/box/100/100',
    isPromoted: true
  },
  {
    id: 2,
    name: 'Motoryzacja',
    icon: '🚗',
    imageUrl: 'https://picsum.photos/seed/car/100/100'
  },
  {
    id: 3,
    name: 'Dom i ogród',
    icon: '🏠',
    imageUrl: 'https://picsum.photos/seed/garden/100/100'
  },
  {
    id: 4,
    name: 'Moda',
    icon: '👗',
    imageUrl: 'https://picsum.photos/seed/fashion/100/100'
  },
  {
    id: 5,
    name: 'Elektronika',
    icon: '💻',
    imageUrl: 'https://picsum.photos/seed/tech/100/100'
  },
  {
    id: 6,
    name: 'Sport i turystyka',
    icon: '⚽',
    imageUrl: 'https://picsum.photos/seed/sport/100/100'
  },
  {
    id: 7,
    name: 'Dziecko',
    icon: '🧸',
    imageUrl: 'https://picsum.photos/seed/toys/100/100'
  },
  {
    id: 8,
    name: 'Supermarket',
    icon: '🛒',
    imageUrl: 'https://picsum.photos/seed/grocery/100/100'
  },
  {
    id: 9,
    name: 'Zdrowie',
    icon: '💊',
    imageUrl: 'https://picsum.photos/seed/health/100/100'
  },
  {
    id: 10,
    name: 'Kolekcje i sztuka',
    icon: '🎨',
    imageUrl: 'https://picsum.photos/seed/art/100/100'
  },
  {
    id: 11,
    name: 'Uroda',
    icon: '💄',
    imageUrl: 'https://picsum.photos/seed/cosmetics/100/100'
  },
  {
    id: 12,
    name: 'Firma i usługi',
    icon: '🏢',
    imageUrl: 'https://picsum.photos/seed/office/100/100'
  }
];