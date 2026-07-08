export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="h-12 w-80 animate-pulse rounded bg-slate-200" />

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((item) => (
          <div
            key={item}
            className="h-96 animate-pulse rounded-2xl bg-slate-200"
          />
        ))}
      </div>
    </main>
  );
}