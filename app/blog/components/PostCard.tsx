import Link from "next/link";
import { Post } from "@/sanity/lib/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const category = post.categories?.[0];

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Placeholder da imagem */}
      <div className="flex h-56 items-center justify-center bg-gray-200 text-gray-500">
        Imagem do artigo
      </div>

      <div className="space-y-4 p-6">
        {category && (
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {category.title}
          </span>
        )}

        <h2 className="line-clamp-2 text-2xl font-bold">{post.title}</h2>

        <p className="line-clamp-3 text-gray-600">{post.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{formattedDate}</span>

          {post.readingTime && <span>{post.readingTime} min de leitura</span>}
        </div>

        <Link
          href={`/blog/${post.slug.current}`}
          className="inline-flex font-semibold text-blue-600 transition hover:text-blue-800"
        >
          Ler artigo →
        </Link>
      </div>
    </article>
  );
}
