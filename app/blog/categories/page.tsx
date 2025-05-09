import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogSearch from "@/components/blog-search"
import { blogPosts } from "@/data/blog-posts"
import { Badge } from "@/components/ui/badge"

export default function CategoriesPage() {
  // Extract unique categories and count posts in each
  const categories = blogPosts.reduce(
    (acc, post) => {
      if (!acc[post.category]) {
        acc[post.category] = 0
      }
      acc[post.category]++
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Categories Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-500 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Categories</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Browse our articles by topic to find exactly what you're looking for.
          </p>
          <div className="max-w-md mx-auto">
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* Categories List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(categories).map(([category, count]) => (
                <Link
                  key={category}
                  href={`/blog/categories/${encodeURIComponent(category.toLowerCase())}`}
                  className="group"
                >
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                        {category}
                      </h3>
                      <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                        {count} {count === 1 ? "post" : "posts"}
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all posts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
