import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogPostCard from "@/components/blog-post-card"
import BlogSearch from "@/components/blog-search"
import Pagination from "@/components/pagination"
import { blogPosts } from "@/data/blog-posts"
import { Badge } from "@/components/ui/badge"

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  // Extract unique categories
  const categories = [...new Set(blogPosts.map((post) => post.category))]

  // Pagination settings
  const postsPerPage = 6
  const currentPage = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const totalPosts = blogPosts.length

  // Calculate pagination
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedPosts = blogPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Blog Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-500 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Insights, experiences, and lessons from our journey in tech and design.
          </p>
          <div className="max-w-md mx-auto">
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-700 font-medium">Browse by category:</span>
            {categories.map((category) => (
              <Link key={category} href={`/blog/categories/${encodeURIComponent(category.toLowerCase())}`}>
                <Badge
                  variant="outline"
                  className="bg-white hover:bg-teal-50 text-teal-700 border-gray-200 hover:border-teal-300 cursor-pointer"
                >
                  {category}
                </Badge>
              </Link>
            ))}
            <Link href="/blog/categories">
              <Badge
                variant="outline"
                className="bg-teal-600 hover:bg-teal-700 text-white border-teal-600 hover:border-teal-700 cursor-pointer"
              >
                View All Categories
              </Badge>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              <Pagination totalItems={totalPosts} itemsPerPage={postsPerPage} currentPage={currentPage} />

              <div className="text-center text-gray-500 text-sm mt-4">
                Showing {startIndex + 1}-{Math.min(endIndex, totalPosts)} of {totalPosts} posts
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No posts found</h2>
              <p className="text-gray-600">We couldn't find any posts. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
