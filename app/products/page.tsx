// app/products/page.tsx

import Header from "@/components/layout/Header";
import SidebarFilters from "@/components/SidebarFilters";
import SortDropdown from "@/components/SortDropdown";
import ProductCardListing from "@/components/ui/ProductCardListing";
import { products, categories } from "@/data/products";
import Link from "next/link";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query = "" } = await searchParams;
  const q = query.toLowerCase();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(q)
  );
  const count = filtered.length;
  const firstProduct = filtered[0];
  const category = firstProduct
    ? categories.find((c) => c.id === firstProduct.categoryID)
    : undefined;
  const categoryName = category?.name ?? "Wszystkie";

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
        <div className="bg-gray-50 text-white px-4 py-6 flex justify-between items-center w-full">
          <div>
            <h1 className="text-3xl font-light text-gray-900">
              szukasz{" "}
              <span className="font-medium">&ldquo;{query}&rdquo;</span>{" "}
              <span className="text-gray-400 text-xl">({count} ofert)</span>
            </h1>
            <nav className="mt-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">
                Allegro
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/products?category=${encodeURIComponent(
                  categoryName
                )}`}
                className="text-orange-500 hover:underline"
              >
                {categoryName}
              </Link>
            </nav>
          </div>
          <div>
            <label className="block text-l text-teal-700 mb-1 uppercase flex">
              {/* ikona */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Polub Wyszukiwania
            </label>
          </div>
        </div>

        <div className="flex items-center bg-[#3a3a3d] text-white px-4 py-2 rounded-lg">
          <SortDropdown />
        </div>

        <div className="grid grid-cols-[250px_1fr] gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm text-gray-900">
            <SidebarFilters />
          </div>
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
