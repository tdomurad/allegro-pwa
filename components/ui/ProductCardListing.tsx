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
      className="block border border-gray-200 bg-white rounded-lg p-4 hover:shadow transition"
    >
      {/* Obrazek */}
      <div className="relative w-full h-44 mb-4 bg-gray-50 rounded">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Nazwa produktu */}
      <h2 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 mb-1">
        {product.name}
      </h2>

      {/* Cena */}
      <div className="text-base font-bold text-black mb-1">
        {product.price.toFixed(2)} zł
      </div>

      {/* Poprzednia cena + info o obniżce */}
      {product.originalPrice && (
        <div className="text-xs text-gray-500 line-through">
          {product.originalPrice.toFixed(2)} zł
        </div>
      )}
      {product.hasSmartPrice && (
        <div className="text-xs text-orange-600 mb-2">
          najniższa cena z 30 dni przed obniżką
        </div>
      )}

      {/* Ocena */}
      <div className="text-sm text-gray-700 mb-1">
        {product.rating} <span className="text-gray-400">({product.reviewCount})</span>
      </div>

      {/* Dostawa */}
      <div className="text-xs text-gray-600">{product.deliveryInfo}</div>

      {/* Zielone cechy */}
      {product.features && product.features.length > 0 && (
        <div className="text-xs text-green-600 font-medium">
          {product.features.slice(0, 2).map((feature, idx) => (
            <div key={idx}>✓ {feature}</div>
          ))}
        </div>
      )}

      {/* Sprzedawca */}
      <div className="text-xs text-gray-500 mt-1">{product.seller}</div>
    </Link>
  );
};

export default ProductCardListing;
