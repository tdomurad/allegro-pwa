import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
          <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
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
