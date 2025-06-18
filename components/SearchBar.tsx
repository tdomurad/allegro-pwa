const SearchBar = () => {
  return (
    <form className="flex w-full max-w-2xl items-center">
      <input
        type="text"
        placeholder="czego szukasz?"
        className="w-full rounded-l-md border-2 border-r-0 border-gray-300 px-4 py-2 text-base focus:border-orange-500 focus:outline-none"
      />
      <button
        type="submit"
        className="flex items-center justify-center rounded-r-md bg-orange-500 px-6 py-2 text-white transition-colors hover:bg-orange-600"
      >
        {/* Ikona lupy z biblioteki Heroicons (https://heroicons.com/) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;