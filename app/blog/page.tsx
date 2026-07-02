import { BlogGrid } from "./components/BlogGrid";
import { BlogHero } from "./components/BlogHero";
import { CategoryFilter } from "./components/CategoryFilter";
import { EmptyState } from "./components/EmptyState";
import { SearchBar } from "./components/SearchBar";

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Post } from "@/sanity/lib/types";

export default async function BlogPage() {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  });

  const posts = (data ?? []) as Post[]

  return (
    <>
      <BlogHero />

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-16">
        <SearchBar />

        <CategoryFilter />

        {posts?.length ? (
          <BlogGrid posts={posts as Post[]} />
        ) : (
          <EmptyState />
        )}
      </main>
    </>
  );
}