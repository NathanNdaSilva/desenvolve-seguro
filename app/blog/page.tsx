import { Metadata } from "next";

import { BlogGrid } from "./components/BlogGrid";
import { BlogHero } from "./components/BlogHero";
import { EmptyState } from "./components/EmptyState";
import { SearchBar } from "./components/SearchBar";

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Post } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Blog | Rhema Corretora de Seguros",
  description:
    "Acompanhe o blog da Rhema com artigos sobre proteção em vida, planejamento sucessório, blindagem patrimonial e novidades do mercado de seguros.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Rhema Corretora de Seguros",
    description:
      "Artigos sobre proteção em vida, planejamento sucessório e blindagem patrimonial.",
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
  keywords:
    "blog seguros, planejamento sucessório, blindagem patrimonial, proteção em vida, mercado de seguros",
};

export default async function BlogPage() {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  });

  const posts = (data ?? []) as Post[];

  return (
    <>
      <BlogHero />

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-16">
        <SearchBar />

        {posts.length ? (
          <BlogGrid posts={posts} />
        ) : (
          <EmptyState />
        )}
      </main>
    </>
  );
}