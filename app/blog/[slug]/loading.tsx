export default function Loading() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 animate-pulse">
      {/* Categorias */}
      <div className="mb-6 flex gap-3">
        <div className="h-7 w-24 rounded-full bg-slate-200" />
        <div className="h-7 w-20 rounded-full bg-slate-200" />
      </div>

      {/* Título */}
      <div className="mb-4 h-12 w-3/4 rounded bg-slate-200" />
      <div className="mb-8 h-12 w-1/2 rounded bg-slate-200" />

      {/* Autor e data */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-slate-200" />

        <div className="space-y-2">
          <div className="h-4 w-40 rounded bg-slate-200" />
          <div className="h-3 w-28 rounded bg-slate-200" />
        </div>
      </div>

      {/* Imagem principal */}
      <div className="mb-12 h-[420px] w-full rounded-2xl bg-slate-200" />

      {/* Conteúdo */}
      <div className="space-y-5">
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-11/12 rounded bg-slate-200" />
        <div className="h-4 w-10/12 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-9/12 rounded bg-slate-200" />

        <div className="mt-10 h-8 w-1/2 rounded bg-slate-200" />

        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-11/12 rounded bg-slate-200" />
        <div className="h-4 w-10/12 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-8/12 rounded bg-slate-200" />

        <div className="mt-10 h-64 w-full rounded-2xl bg-slate-200" />

        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-11/12 rounded bg-slate-200" />
        <div className="h-4 w-9/12 rounded bg-slate-200" />
      </div>
    </main>
  );
}