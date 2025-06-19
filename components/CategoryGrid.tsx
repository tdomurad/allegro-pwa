import { categories } from '@/data/products';
import CategoryCard from './ui/CategoryCard';

const CategoryGrid = () => {
  return (
    <div className="w-full mb-8">
      <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;