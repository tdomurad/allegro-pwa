// app/product/[id]/page.tsx
import { products, categories } from "@/data/products";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: { id: string };
}

export default function ProductPage({ params }: PageProps) {
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Produkt nie znaleziony.</p>
      </div>
    );
  }

  // znajdź kategorię tego produktu
  const category = categories.find((c) => c.id === product.categoryId);
  const categoryName = category?.name ?? "Wszystkie";

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* globalny header */}
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
        {/* breadcrumb */}
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Allegro
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/products?category=${encodeURIComponent(categoryName)}`}
            className="text-orange-500 hover:underline"
          >
            {categoryName}
          </Link>
        </nav>

        {/* content: obrazek + panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1) Duży obrazek */}
          <div className="bg-white rounded-lg p-4 flex justify-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          {/* 2) Panel z danymi */}
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
            {/* a) sprzedawca */}
            <div className="space-y-1">
              <p className="text-xs text-gray-500">od {product.seller}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="uppercase font-medium">Firma</span>
                <span className="text-green-600">poleca 99%</span>
              </div>
            </div>

            {/* b) cena */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">
                {product.price.toLocaleString("pl-PL", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                zł
              </div>
              {product.hasSmartPrice && (
                <div className="text-sm text-orange-600">
                  najniższa cena z 30 dni przed obniżką
                </div>
              )}
              <div className="text-sm text-green-600">{product.deliveryInfo}</div>
            </div>

            {/* c) przyciski akcji */}
            <div className="space-y-3">
              <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                Dodaj do koszyka
              </button>
              <button className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-700 transition">
                Kup i zapłać
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
