// components/SearchBar.tsx
"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/products?query=${encodeURIComponent(term.trim())}`);
  };

  return (
    <div className="flex w-full max-w-2xl">
      <form className="flex w-full items-center" onSubmit={handleSubmit}>
        {/* INPUT WYSZUKIWANIA */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="czego szukasz?"
            className="h-12 w-full rounded-l-md border-2 border-r-0 border-gray-400 bg-white px-4 text-base text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-none"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          {/* Ikona aparatu/rozpoznawania obrazu */}
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* DROPDOWN KATEGORII */}
        <button
          type="button"
          className="flex h-12 items-center gap-2 border-2 border-l-0 border-r-0 border-gray-400 bg-white px-4 text-gray-700 hover:bg-gray-50"
        >
          <span className="text-sm whitespace-nowrap">Wszystkie kategorie</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* PRZYCISK SZUKAJ */}
        <button
          type="submit"
          className="flex h-12 items-center justify-center rounded-r-md bg-orange-500 px-6 text-white transition-colors hover:bg-orange-600"
        >
          <span className="mr-2 text-sm font-bold">SZUKAJ</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
