import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Post } from "@/sanity/lib/types";
import { PostCard } from "./components/PostCard";

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">Blog</h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          Conteúdos sobre seguros, proteção financeira e informações importantes
          para ajudar você a tomar decisões mais seguras.
        </p>
      </header>

      {posts?.length ? (
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post) => (
            <PostCard
              key={post._id}
              post={post}
            />
          ))}
        </section>
      ) : (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <h2 className="text-2xl font-semibold">
            Nenhum artigo encontrado
          </h2>

          <p className="mt-2 text-gray-500">
            Assim que novos conteúdos forem publicados, eles aparecerão aqui.
          </p>
        </div>
      )}
    </main>
  );
}