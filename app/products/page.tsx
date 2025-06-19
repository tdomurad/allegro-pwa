// app/products/page.tsx
"use client"
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // Filtrowanie produktów po tytule
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="bg-white min-h-screen">
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {query && (
          <h1 className="text-2xl font-bold mb-6">
            Szukasz „{query}” ({filteredProducts.length} wyników)
          </h1>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
