import type React from "react"
import type { Metadata } from "next"
import { blogPosts } from "@/data/blog-posts"

interface BlogPostLayoutProps {
  children: React.ReactNode
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Eagles Team Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Eagles Team Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category, "Eagles Team", "Tech Blog"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return <>{children}</>
}
