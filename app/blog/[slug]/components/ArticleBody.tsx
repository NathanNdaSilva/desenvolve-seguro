import { PortableText } from "@portabletext/react";

import { Post } from "@/sanity/lib/types";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";

interface ArticleBodyProps {
  post: Post;
}

export function ArticleBody({ post }: ArticleBodyProps) {
  if (!post.body) return null;

  return (
    <article className="prose prose-lg max-w-none prose-slate">
      <PortableText
        value={post.body}
        components={portableTextComponents}
      />
    </article>
  );
}