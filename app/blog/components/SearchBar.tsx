export function SearchBar() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Pesquisar artigos..."
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
      />
    </div>
  );
}