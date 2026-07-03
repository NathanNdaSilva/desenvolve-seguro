import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";

const POST_BY_SLUG_QUERY = defineQuery(`
  *[ _type == "post" && slug.current == $slug ][0] {
    _id,
    title,
    publishedAt,
    body,
    excerpt
  }
`);

export const dynamic = "force-dynamic";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  // Deixamos o sanityFetch livre de tipagem direta nos colchetes
  const response = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  });

  // Dizemos ao TS que o objeto interno possui as propriedades que queremos ler
  // Usamos Record<string, unknown> para o ESLint aceitar sem chiar com 'any'
  const post = response?.data as Record<string, unknown> | null;

  // Se o Sanity não retornar nada ou vier vazio, joga 404
  if (!post || !post.title) {
    notFound();
  }

  const title = String(post.title);
  const excerpt = post.excerpt ? String(post.excerpt) : "";
  const publishedAt = post.publishedAt ? String(post.publishedAt) : "";

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-4">
          <span className="text-sm text-gray-500">{formattedDate}</span>
          <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="text-xl text-gray-600">{excerpt}</p>
        </header>

        <hr className="my-8" />

        <div className="prose max-w-none text-gray-800">
          <p className="italic text-gray-500">
            [Conteúdo do artigo carregado com sucesso!]
          </p>
        </div>
      </article>
    </main>
  );
}
