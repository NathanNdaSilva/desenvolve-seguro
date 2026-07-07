import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Post } from "@/sanity/lib/types";
import { PostCard } from "./components/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rhema Corretora de Seguros",
  description:
    "Acompanhe o blog da Rhema com artigos sobre proteção em vida, planejamento sucessório, blindagem patrimonial e novidades do mercado de seguros.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Rhema Corretora de Seguros",
    description: "Artigos sobre proteção em vida, planejamento sucessório e blindagem patrimonial.",
    url: "/blog",
    siteName: "Rhema Corretora de Seguros",
    images: [
      {
        url: "/logo_rhema.png",
        width: 1200,
        height: 630,
        alt: "Blog Rhema",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Rhema Corretora de Seguros" }],
  keywords: "blog seguros, planejamento sucessório, blindagem patrimonial, proteção em vida, mercado de seguros",
};

export default async function BlogPage() {
  const response = await sanityFetch({
    query: POSTS_QUERY,
  });

  const posts = (response?.data || []) as Post[];

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
            <PostCard key={post._id} post={post} />
          ))}
        </section>
      ) : (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <h2 className="text-2xl font-semibold">Nenhum artigo encontrado</h2>

          <p className="mt-2 text-gray-500">
            Assim que novos conteúdos forem publicados, eles aparecerão aqui.
          </p>
        </div>
      )}
    </main>
  );
}
