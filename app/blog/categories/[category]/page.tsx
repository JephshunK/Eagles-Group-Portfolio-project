import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogPostCard from "@/components/blog-post-card"
import BlogSearch from "@/components/blog-search"
import Pagination from "@/components/pagination"
import { blogPosts } from "@/data/blog-posts"

interface CategoryPageProps {
  params: {
    category: string
  }
  searchParams: {
    page?: string
  }
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const decodedCategory = decodeURIComponent(params.category)

  // Find all posts in this category (case insensitive)
  const filteredPosts = blogPosts.filter((post) => post.category.toLowerCase() === decodedCategory.toLowerCase())

  // Get the properly cased category name from the first post
  const categoryName = filteredPosts.length > 0 ? filteredPosts[0].category : decodedCategory

  // If no posts found, return 404
  if (filteredPosts.length === 0) {
    notFound()
  }

  // Pagination settings
  const postsPerPage = 6
  const currentPage = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const totalPosts = filteredPosts.length

  // Calculate pagination
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Category Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-500 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryName}</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            {totalPosts} {totalPosts === 1 ? "article" : "articles"} in this category
          </p>
          <div className="max-w-md mx-auto">
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* Category Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <Link href="/blog/categories" className="inline-flex items-center text-teal-600 hover:text-teal-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Categories
            </Link>
            <Link href="/blog" className="text-teal-600 hover:text-teal-700">
              View All Posts
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <Pagination totalItems={totalPosts} itemsPerPage={postsPerPage} currentPage={currentPage} />

          {totalPosts > postsPerPage && (
            <div className="text-center text-gray-500 text-sm mt-4">
              Showing {startIndex + 1}-{Math.min(endIndex, totalPosts)} of {totalPosts} posts
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
