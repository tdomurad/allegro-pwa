import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  isPriority?: boolean;
}

const ProductCard = ({ product, isPriority = false }: ProductCardProps) => {
  return (
    <Link 
      href={`/products/${product.id}`} 
      className="block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
    >
      <div className="relative">
        {/* Product Image */}
        <div className="relative h-48 w-full bg-gray-50">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            priority={isPriority}
          />
          
          {/* Smart Badge */}
          {product.isSmart && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              SMART!
            </div>
          )}
          
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{product.discount}%
            </div>
          )}
          
          {/* Heart Icon */}
          <button aria-label="Dodaj do ulubionych" className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-sm text-gray-800 line-clamp-2 mb-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          
          {/* Price Section */}
          <div className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                {product.price.toFixed(2)} zł
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice.toFixed(2)} zł
                </span>
              )}
            </div>
            
            {/* Smart Price */}
            {product.hasSmartPrice && (
              <div className="text-xs text-orange-600 font-medium">
                najniższa cena z 30 dni przed obniżką
              </div>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 ml-1">
                {product.rating}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              ({product.reviewCount})
            </span>
          </div>
          
          {/* Delivery Info */}
          <div className="text-xs text-gray-600 mb-2">
            {product.deliveryInfo}
          </div>
          
          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="space-y-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="text-xs text-green-600 font-medium">
                  ✓ {feature}
                </div>
              ))}
            </div>
          )}
          
          {/* Seller */}
          <div className="text-xs text-gray-500 mt-2">
            {product.seller}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
