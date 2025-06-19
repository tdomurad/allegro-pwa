export default function SidebarFilters() {
  return (
    <aside className="space-y-6 sticky top-20">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Darmowa dostawa i zwrot</h3>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="form-checkbox" />
          Allegro Smart!
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="form-checkbox" />
          darmowa dostawa
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="form-checkbox" />
          darmowy zwrot
        </label>
      </div>
    </aside>
  );
}
