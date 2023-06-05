import PostPage from "./default";

import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    image: post?.mainImage ? urlForImage(post?.mainImage)?.src : null,
    openGraph: {
      images: [
        {
          url:
            urlForImage(post?.mainImage)?.src || "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      handle: "@techparrots",
      site: "@techparrots",
      cardType: "summary_large_image",
      title: post?.title || "Techunlimited",
      card: "summary_large_image"
    }
  };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

// export const revalidate = 60;
