import Header from "@/components/layout/Header";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <HeroBanner />
      </main>
    </div>
  );
}