import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { blogPosts } from "@/data/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"

  // Get unique blog categories
  const categories = [...new Set(blogPosts.map((post) => post.category.toLowerCase()))]

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]

  // Project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(), // Ideally, use actual lastModified date if available
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Convert post.date to Date object
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/blog/categories/${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // Combine all routes
  return [...staticRoutes, ...projectRoutes, ...blogRoutes, ...categoryRoutes]
}
