import Header from "@/components/layout/Header";
import ProductGrid from "@/components/ProductGrid";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <HeroBanner />
        <CategoryGrid />
        <ProductGrid />
      </main>
    </div>
  );
}