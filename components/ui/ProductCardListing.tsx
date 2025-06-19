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
      href={`/product/${product.id}`}
      className="flex bg-gray-900 text-white rounded-lg overflow-hidden"
    >
      {/* LEWA: Obrazek + SMART! */}
      <div className="relative w-48 h-48 bg-gray-800 flex-shrink-0">
        {product.isSmart && (
          <div className="absolute top-2 left-2 bg-orange-500 text-xs font-bold uppercase px-2 py-1 rounded">
            SMART!
          </div>
        )}
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
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span className="uppercase">Promowane</span>
          <span className="text-xs">ℹ️</span>
        </div>

        {/* Nazwa */}
        <h2 className="text-lg font-medium leading-snug">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Cechy (np. Darmowa dostawa) */}
        {product.features?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs text-green-400">
            {product.features.map((f, i) => (
              <span key={i}>✓ {f}</span>
            ))}
          </div>
        )}
      </div>

      {/* PRAWA: Cena + akcje */}
      <div className="flex-shrink-0 w-64 p-4 flex flex-col justify-between">
        <div>
          {/* Cena */}
          <div className="text-3xl font-bold leading-tight">
            {product.price.toLocaleString('pl-PL', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} zł{' '}
            {product.isSmart && (
              <span className="text-base font-normal">SMART!</span>
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
            ❤️
          </button>
        </div>

        {/* Sprzedawca */}
        <div className="text-xs text-gray-400 mt-3">
          {product.seller}
        </div>
      </div>
    </Link>
  );
};

export default ProductCardListing;
