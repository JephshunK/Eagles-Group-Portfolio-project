import { projects } from "@/data/projects"
import { blogPosts } from "@/data/blog-posts"

export async function generateSitemaps() {
  // Create sitemap segments
  return [{ id: "static-pages" }, { id: "projects" }, { id: "blog-posts" }, { id: "blog-categories" }]
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  const id = params.id

  // Get unique blog categories
  const categories = [...new Set(blogPosts.map((post) => post.category.toLowerCase()))]

  // Initialize sitemap entries array
  let entries: { url: string; lastmod?: string; changefreq?: string; priority?: string }[] = []

  // Fill entries based on the sitemap ID
  if (id === "static-pages") {
    entries = [
      {
        url: `${baseUrl}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: "1.0",
      },
      {
        url: `${baseUrl}/projects`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        url: `${baseUrl}/team`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: "0.8",
      },
      {
        url: `${baseUrl}/blog`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: "0.9",
      },
      {
        url: `${baseUrl}/blog/categories`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: "0.7",
      },
    ]
  } else if (id === "projects") {
    entries = projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.8",
    }))
  } else if (id === "blog-posts") {
    entries = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastmod: new Date(post.date).toISOString(),
      changefreq: "monthly",
      priority: "0.7",
    }))
  } else if (id === "blog-categories") {
    entries = categories.map((category) => ({
      url: `${baseUrl}/blog/categories/${encodeURIComponent(category)}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.6",
    }))
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${entries
        .map(
          (entry) => `
        <url>
          <loc>${entry.url}</loc>
          ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}
          ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ""}
          ${entry.priority ? `<priority>${entry.priority}</priority>` : ""}
        </url>
      `,
        )
        .join("")}
    </urlset>`

  // Return XML response
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
