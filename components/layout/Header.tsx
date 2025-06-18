import SearchBar from "@/components/SearchBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 bg-gray-100 p-4 shadow-sm">
      <div className="flex-shrink-0">
        {/* Placeholder na Logo */}
        <p className="text-3xl font-bold text-orange-500">allegro</p>
      </div>

      <div className="flex-grow">
        {/* Miejsce na Pasek Wyszukiwania */}
        <SearchBar />
      </div>

      <div className="flex flex-shrink-0 items-center gap-4">
        {/* Placeholder na Ikony (np. Koszyk, Profil) */}
        <p>Ikony</p>
      </div>
    </header>
  );
};

export default Header;