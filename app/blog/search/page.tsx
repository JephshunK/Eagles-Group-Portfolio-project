"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogPostCard from "@/components/blog-post-card"
import BlogSearch from "@/components/blog-search"
import Pagination from "@/components/pagination"
import { blogPosts } from "@/data/blog-posts"
import type { BlogPost } from "@/types/blog"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get("q") || ""
  const pageParam = searchParams.get("page") || "1"
  const currentPage = Number.parseInt(pageParam)

  const [results, setResults] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Pagination settings
  const postsPerPage = 6

  useEffect(() => {
    if (query) {
      setIsLoading(true)
      // Simulate a slight delay to show loading state
      const timer = setTimeout(() => {
        const searchResults = searchBlogPosts(query)
        setResults(searchResults)
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setResults([])
      setIsLoading(false)
    }
  }, [query])

  // Calculate pagination
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedResults = results.slice(startIndex, endIndex)
  const totalResults = results.length

  // Search function to filter blog posts based on query
  const searchBlogPosts = (searchQuery: string): BlogPost[] => {
    const normalizedQuery = searchQuery.toLowerCase().trim()

    return blogPosts.filter((post) => {
      // Search in title, excerpt, content, author, and category
      return (
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.content.some((paragraph) => paragraph.toLowerCase().includes(normalizedQuery)) ||
        post.author.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery)
      )
    })
  }

  // Create base URL for pagination
  const createBaseUrl = () => {
    const params = new URLSearchParams()
    params.set("q", query)
    return `/blog/search?${params.toString()}`
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Search Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-500 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Search Results</h1>
          <div className="max-w-2xl mx-auto">
            <BlogSearch className="mb-4" />
            {query && (
              <p className="text-xl">
                {isLoading
                  ? "Searching..."
                  : `Found ${totalResults} ${totalResults === 1 ? "result" : "results"} for "${query}"`}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all posts
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
            </div>
          ) : totalResults > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedResults.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              <Pagination
                totalItems={totalResults}
                itemsPerPage={postsPerPage}
                currentPage={currentPage}
                baseUrl={createBaseUrl()}
              />

              {totalResults > postsPerPage && (
                <div className="text-center text-gray-500 text-sm mt-4">
                  Showing {startIndex + 1}-{Math.min(endIndex, totalResults)} of {totalResults} results
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No results found</h2>
              <p className="text-gray-600 mb-8">
                We couldn't find any posts matching your search. Try using different keywords or browse our categories.
              </p>
              <Link
                href="/blog/categories"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Browse Categories
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
