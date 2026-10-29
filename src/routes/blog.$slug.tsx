import { createFileRoute, redirect } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";
import { getPostBySlug } from "@/data/blog";
import { blogPostJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw redirect({ to: "/blog", replace: true });
    return { slug: post.slug };
  },
  head: ({ loaderData }) => {
    const post = loaderData ? getPostBySlug(loaderData.slug) : undefined;
    if (!post) return {};
    return seoHead({
      title: `${post.metaTitle} | РостовТехРезерв`,
      description: post.metaDescription,
      keywords: post.keywords,
      path: `/blog/${post.slug}`,
      jsonLd: blogPostJsonLd(post),
    });
  },
  component: BlogPost,
});
