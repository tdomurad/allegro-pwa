import { categories } from '@/data/products';
import CategoryCard from '@/components/ui/CategoryCard';

const CategoryGrid = () => {
  return (
    <div className="w-full mb-8">
      {/* Scrollable horizontal container */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide horizontal-scroll pb-4 px-1">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        {/* Gradient fade on the right */}
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CategoryGrid;