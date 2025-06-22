import SearchBar from "@/components/SearchBar";

const Header = () => {
  return (
    <header className="bg-[#2d2d30]">
      {/* GÓRNY PASEK NAGŁÓWKA */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">allegro</span>
            <div className="flex flex-col text-xs text-orange-500">
              <span className="font-bold leading-3">20</span>
              <span className="font-bold leading-3">LAT</span>
            </div>
          </div>
        </div>

        {/* PASEK WYSZUKIWANIA */}
        <div className="flex-1 max-w-2xl">
          <SearchBar />
        </div>

        {/* IKONY PO PRAWEJ */}
        <div className="flex items-center gap-4">
          {/* Ikona lokalizacji/dostawy */}
          <button aria-label="Dostawa" className="flex items-center gap-2 text-white hover:text-orange-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM12.75 18.75a1.5 1.5 0 01-3 0V9.75a1.5 1.5 0 013 0v9zM17.25 18.75a1.5 1.5 0 01-3 0V6.75a1.5 1.5 0 013 0v12z" />
            </svg>
          </button>

          {/* Ulubione */}
          <button aria-label="Ulubione" className="flex items-center gap-2 text-white hover:text-orange-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>

          {/* Powiadomienia/Wiadomości */}
          <button aria-label="Powiadomienia" className="flex items-center gap-2 text-white hover:text-orange-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>

          {/* Koszyk bez licznika */}
          <button aria-label="Koszyk" className="flex items-center gap-2 text-white hover:text-orange-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.09-.834l1.5-6A1.125 1.125 0 0018 5.25H5.25L5.117 4.659A1.125 1.125 0 004.002 3.75H2.25" />
            </svg>
          </button>

          {/* Moje Allegro - dla niezalogowanych */}
          <div className="flex items-center gap-2">
            <span className="text-white">Moje Allegro</span>
            <button aria-label="Więcej" className="text-white hover:text-orange-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* DOLNY PASEK NAWIGACYJNY */}
      <div className="border-t border-gray-600 bg-[#3a3a3d]">
        <nav className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-2">
          {/* Przycisk Kategorie */}
          <button className="flex items-center gap-2 rounded bg-[#525252] px-3 py-2 text-sm font-medium text-white hover:bg-[#626262]">
            Kategorie
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {/* Pozostałe linki nawigacyjne */}
          <div className="flex items-center gap-6 text-sm text-white">
            <a href="#" className="flex items-center gap-1 hover:text-orange-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
              </svg>
              Strefa Okazji
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-orange-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Allegro Protect
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-orange-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Gwarancja najniższej ceny
            </a>
            <a href="#" className="hover:text-orange-400">Sprzedawaj na Allegro</a>
          </div>

          {/* Status bądź SMART po prawej - bez Aktywuj PAV */}
          <div className="ml-auto flex items-center gap-4 text-sm">
            <span className="text-white">
              bądź <span className="font-bold text-orange-500">SMART</span>🔥
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;