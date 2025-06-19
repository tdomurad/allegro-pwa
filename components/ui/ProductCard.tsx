import { Product } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`} className="block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
      <div className="relative h-56 w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base text-gray-800 h-12 mb-2">{product.name}</h3>
        <p className="text-xl font-bold text-gray-900">{product.price.toFixed(2)} zł</p>
      </div>
    </Link>
  );
};

export default ProductCard;