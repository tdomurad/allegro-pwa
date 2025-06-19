export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isSmart: boolean;
  hasSmartPrice: boolean;
  deliveryInfo: string;
  seller: string;
  discount?: number;
  features?: string[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  imageUrl: string;
  isPromoted?: boolean;
}