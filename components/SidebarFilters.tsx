export default function SidebarFilters() {
  return (
    <aside className="space-y-5">
      <div className="space-y-3">
        <h3 className="text-l font-semibold">Darmowa dostawa i zwrot</h3>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Allegro Smart!
        </label>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          darmowa dostawa
        </label>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          darmowy zwrot
        </label>
      </div>
      <div className="space-y-3">
        <h3 className="text-l font-semibold">Miejsce Wysyłki</h3>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Polska
        </label>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Chiny
        </label>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Hiszpania
        </label>
      </div>
      <div className="space-y-3">
        <h3 className="text-l font-semibold">Stan</h3>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Nowe
        </label>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Po zwrocie
        </label>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Używane
        </label>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Powystawowe
        </label>
      </div>
      <div className="space-y-3">
        <h3 className="text-l font-semibold">Rodzaj Oferty</h3>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          Kup teraz!
        </label>
        <label className="flex items-center gap-2 text-s">
          <input type="checkbox" className="form-checkbox" />
          licytacje
        </label>
      </div>
    </aside>
);
}
