import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const ProductGrid = () => {
  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Jak wszystko na lato, to w niskich cenach
        </h2>
        <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
          Zobacz więcej
        </button>
      </div>
      
      {/* Products Horizontal Scroll */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide horizontal-scroll pb-4 px-1">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-56 sm:w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Gradient fade on the right */}
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ProductGrid;