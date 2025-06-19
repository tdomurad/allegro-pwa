const HeroBanner = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-6">
      {/* Główny banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-8 py-12">
        {/* Tło z wzorem */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/90 to-orange-600/90"></div>
        
        {/* Zawartość */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">

            {/* Główny tekst */}
            <div className="mb-6">
              <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
                Jak wszystko na lato,
              </h1>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                to w <span className="bg-black px-2 py-1 rounded">niskich cenach</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;