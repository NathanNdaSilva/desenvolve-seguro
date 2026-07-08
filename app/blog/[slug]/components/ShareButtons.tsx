export function ShareButtons() {
  return (
    <section className="mt-12">
      <h3 className="mb-4 text-lg font-semibold">
        Compartilhe este artigo
      </h3>

      <div className="flex gap-3">
        <button className="rounded-lg border px-4 py-2">
          WhatsApp
        </button>

        <button className="rounded-lg border px-4 py-2">
          LinkedIn
        </button>

        <button className="rounded-lg border px-4 py-2">
          Facebook
        </button>
      </div>
    </section>
  );
}