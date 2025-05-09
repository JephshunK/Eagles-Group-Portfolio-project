export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"

  // Define sitemap segments
  const segments = ["static-pages", "projects", "blog-posts", "blog-categories"]

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${segments
        .map(
          (segment) => `
        <sitemap>
          <loc>${baseUrl}/sitemap/${segment}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>
      `,
        )
        .join("")}
    </sitemapindex>`

  // Return XML response
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
