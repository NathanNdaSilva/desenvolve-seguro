import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    readingTime,
    mainImage,
    "author": author->{
      name,
      role
    },
    "categories": categories[]->{
      title,
      slug
    }
  }
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    body,
    mainImage,
    "author": author->{
      name,
      role,
      image,
      bio
    },
    "categories": categories[]->{
      title,
      slug
    }
  }
`;