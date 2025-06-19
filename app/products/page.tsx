"use client";

import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import SidebarFilters from "@/components/SidebarFilters";
import SortDropdown from "@/components/SortDropdown";
import ProductCardListing from "@/components/ui/ProductCardListing";
import { products } from "@/data/products";
import Header from "@/components/layout/Header";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // filtrowanie po tytule
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-gray-50">
      <Header />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-[250px_1fr] gap-6">

        <SidebarFilters />

        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-900 text-white px-4 py-2 rounded">
            <div className="text-sm">
              Szukasz „{query}” ({filtered.length} wyników)
            </div>
            <SortDropdown />
          </div>

          <div className="space-y-4">
            {filtered.map(product => (
              <ProductCardListing key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 text-sm">
            <button className="px-3 py-1 border rounded">‹</button>
            <span>1 z 10</span>
            <button className="px-3 py-1 border rounded">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
