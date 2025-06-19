"use client";

import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import SidebarFilters from "@/components/SidebarFilters";
import SortDropdown from "@/components/SortDropdown";
import ProductCardListing from "@/components/ui/ProductCardListing";
import { products } from "@/data/products";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  // statyczne paginacja
  const currentPage = 1;
  const totalPages = 10;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
      <div className="bg-gray-900 text-white px-4 py-6">
      {/* Linia 1: duży nagłówek */}
      <h1 className="text-3xl font-light">
        szukasz <span className="font-medium">&ldquo;{query}&rdquo;</span>{" "}
        <span className="text-gray-400">({2137} ofert)</span>
      </h1>

      {/* Linia 2: breadcrumb */}
      <nav className="mt-2 text-sm text-gray-200">
        <a href="/" className="hover:text-white">
          Allegro
        </a>
        <span className="mx-2">/</span>
        <a
          className="text-orange-500 hover:underline"
        >
          Rzeczy
        </a>
      </nav>
    </div>
        <div className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg">
          {/* ikona widoku */}
          <SortDropdown/>
        </div>

        {/* -- grid: filtr + lista */}
        <div className="grid grid-cols-[250px_1fr] gap-6">
          {/* sidebar z tłem */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <SidebarFilters />
          </div>

          {/* kolumna z produktami */}
          <div className="space-y-4">
            {filtered.map((product) => (
              <ProductCardListing key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
