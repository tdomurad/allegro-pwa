import { Category } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link 
      href={`/category/${category.id}`} 
      className="block group flex-shrink-0"
    >
      <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-20">
        <div className="relative w-16 h-16 mb-2 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {category.isPromoted && (
            <div className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
          )}
        </div>
        <span className="text-xs text-center text-gray-700 leading-tight font-medium line-clamp-2 h-8">
          {category.name}
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;