import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AdaptiveReadingProgress from "@/components/adaptive-reading-progress"
import SocialShare from "@/components/social-share"
import MobileShareFab from "@/components/mobile-share-fab"
import { blogPosts } from "@/data/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Construct the full URL for sharing
  const postUrl = `/blog/${post.slug}`

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AdaptiveReadingProgress title={post.title} estimatedReadTime={post.readTime} />

      {/* Floating share buttons for desktop */}
      <SocialShare
        url={postUrl}
        title={post.title}
        description={post.excerpt}
        hashtags={[post.category, "EaglesTeam", "TechBlog"]}
        variant="floating"
      />

      {/* Mobile floating share button */}
      <MobileShareFab url={postUrl} title={post.title} description={post.excerpt} />

      <article className="pt-32 pb-20">
        {/* Header */}
        <header className="container mx-auto px-4 mb-12">
          <div className="flex justify-between items-start mb-6">
            <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all posts
            </Link>

            {/* Inline share button for the header */}
            <SocialShare
              url={postUrl}
              title={post.title}
              description={post.excerpt}
              variant="minimal"
              showLabel={true}
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center text-gray-500 mb-8">
            <div className="flex items-center mr-6 mb-2">
              <User className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock className="h-5 w-5 mr-2" />
              <span>{post.readTime} min read</span>
            </div>
            <Link
              href={`/blog/categories/${encodeURIComponent(post.category.toLowerCase())}`}
              className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full hover:bg-teal-200 transition-colors mb-2"
            >
              {post.category}
            </Link>
          </div>
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
            <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share buttons at the end of the article */}
          <div className="max-w-3xl mx-auto mt-12 mb-12">
            <div className="border-t border-b border-gray-200 py-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Share this article</h3>
              <SocialShare
                url={postUrl}
                title={post.title}
                description={post.excerpt}
                hashtags={[post.category, "EaglesTeam", "TechBlog"]}
                showLabel={true}
              />
            </div>
          </div>

          {/* Author Bio */}
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{post.author}</h3>
                <p className="text-teal-600">{post.authorRole}</p>
              </div>
            </div>
            <p className="text-gray-700">{post.authorBio}</p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
