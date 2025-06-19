export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Smartfon Apple iPhone 15 Pro 128GB Tytan Naturalny',
    price: 4999.00,
    imageUrl: 'https://placehold.co/300x300/EFEFEF/333?text=iPhone+15',
    rating: 4.9,
    reviewCount: 125,
  },
  {
    id: 2,
    name: 'Ekspres do kawy De\'Longhi Magnifica S ECAM 22.110.B',
    price: 1449.00,
    imageUrl: 'https://placehold.co/300x300/EFEFEF/333?text=Ekspres',
    rating: 4.8,
    reviewCount: 890,
  },
  {
    id: 3,
    name: 'LEGO Technic 42158 NASA Mars Rover Perseverance',
    price: 369.99,
    imageUrl: 'https://placehold.co/300x300/EFEFEF/333?text=LEGO',
    rating: 5.0,
    reviewCount: 312,
  },
  {
    id: 4,
    name: 'Słuchawki bezprzewodowe Sony WH-1000XM5 ANC',
    price: 1599.00,
    imageUrl: 'https://placehold.co/300x300/EFEFEF/333?text=Słuchawki',
    rating: 4.7,
    reviewCount: 543,
  },
  {
    id: 5,
    name: 'Odkurzacz pionowy Dyson V15 Detect Absolute',
    price: 3199.00,
    imageUrl: 'https://placehold.co/300x300/EFEFEF/333?text=Odkurzacz',
    rating: 4.9,
    reviewCount: 210,
  },
];