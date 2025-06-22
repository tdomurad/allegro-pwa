"use client";

export default function SortDropdown() {
  return (
    <div className="flex justify-between items-center w-full bg-[#3a3a3d] text-white px-4 py-2 rounded">
      {/* lewa grupa: ikonka + sortowanie */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <label className="block text-xs text-gray-400 mb-1 uppercase">
            sortowanie
          </label>
          <select
            aria-label="Sortowanie"
            className="h-8 bg-[#3a3a3d] border border-gray-600 text-sm pl-3 pr-8 rounded cursor-pointer"
            defaultValue="trafnosc"
          >
            <option value="trafnosc">trafność: największa</option>
            <option value="price-asc">cena: od najniższej</option>
            <option value="price-desc">cena: od najwyższej</option>
          </select>
        </div>
      </div>

      {/* prawa grupa: paginacja */}
      <div className="flex items-center space-x-2 text-sm">
        <button className="px-2 py-1 border border-gray-600 rounded hover:bg-gray-800 disabled:opacity-50">
          ‹
        </button>
        <input
          aria-label="Aktualny numer strony"
          type="text"
          readOnly
          value="1"
          className="w-10 h-8 bg-[#3a3a3d] border border-gray-600 text-center rounded text-white"
        />
        <span className="text-gray-400">z 100</span>
        <button className="px-2 py-1 border border-gray-600 rounded hover:bg-gray-800 disabled:opacity-50">
          ›
        </button>
      </div>
    </div>
);
}
