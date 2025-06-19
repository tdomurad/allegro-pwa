import { products } from '../data/products';
import ProductCard from './ui/ProductCard';

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
      
      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;