"use client";

export function ShareButtons() {
  const share = (platform: "whatsapp" | "linkedin" | "facebook") => {
    const url = encodeURIComponent(window.location.href);

    let shareUrl = "";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${url}`;
        break;

      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;

      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copiado com sucesso!");
    } catch (error) {
      console.error("Erro ao copiar o link:", error);
      alert("Não foi possível copiar o link.");
    }
  };

  return (
    <section className="mt-12">
      <h3 className="mb-4 text-lg font-semibold">
        Compartilhe este artigo
      </h3>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => share("whatsapp")}
          className="rounded-lg border px-4 py-2 transition-colors hover:bg-gray-100"
        >
          WhatsApp
        </button>

        <button
          onClick={() => share("linkedin")}
          className="rounded-lg border px-4 py-2 transition-colors hover:bg-gray-100"
        >
          LinkedIn
        </button>

        <button
          onClick={() => share("facebook")}
          className="rounded-lg border px-4 py-2 transition-colors hover:bg-gray-100"
        >
          Facebook
        </button>

        <button
          onClick={copyLink}
          className="rounded-lg border px-4 py-2 transition-colors hover:bg-gray-100"
        >
          Copiar Link
        </button>
      </div>
    </section>
  );
}