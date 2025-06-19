// components/ui/ProductCardListing.tsx
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardListingProps {
  product: Product;
}

const ProductCardListing = ({ product }: ProductCardListingProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
    >
      {/* LEWA: Obrazek + SMART! */}
      <div className="relative w-48 h-48 bg-gray-800 flex-shrink-0">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* ŚRODEK: Opis */}
      <div className="flex-1 px-4 py-3 space-y-1 text-sm">
        {/* Promowane + info */}
        <div className="flex items-center gap-1 text-xs text-gray-900">
          <span className="uppercase">Promowane</span>
          <span className="text-xs">ℹ️</span>
        </div>

        {/* Nazwa */}
        <h2 className="text-xl font-medium leading-snug text-gray-900">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-gray-800">
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-gray-500">({product.reviewCount})</span>
        </div>
      </div>

      {/* PRAWA: Cena + akcje */}
      <div className="flex-shrink-0 w-64 p-4 flex flex-col justify-between">
        <div>
          {/* Cena */}
          <div className="text-3xl font-bold leading-tight text-gray-900">
            {product.price.toLocaleString('pl-PL', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} zł{' '}
            {product.isSmart && (
              <span className="text-base font-normal text-gray-400">SMART!</span>
            )}
          </div>

          {/* SmartPrice info */}
          {product.hasSmartPrice && (
            <div className="text-xs text-orange-600 mt-1">
              najniższa cena z 30 dni przed obniżką
            </div>
          )}

          {/* Dostawa */}
          <div className="text-xs text-green-400 mt-1">
            {product.deliveryInfo}
          </div>
        </div>

        {/* Dodaj do koszyka + ulubione */}
        <div className="flex items-center gap-2 mt-4">
          <button className="flex-1 bg-orange-500 text-white py-2 rounded text-sm font-semibold hover:bg-orange-600 transition">
            Dodaj do koszyka
          </button>
          <button className="p-2 border border-gray-700 rounded hover:bg-gray-800 transition">
            <div className="text-gray-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Sprzedawca */}
        <div className="text-xs text-gray-900 mt-3">
          {product.seller}
        </div>
      </div>
    </Link>
  );
};

export default ProductCardListing;
