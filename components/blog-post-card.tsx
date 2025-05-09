import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import type { BlogPost } from "@/types/blog"

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 w-full">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <Link
            href={`/blog/categories/${encodeURIComponent(post.category.toLowerCase())}`}
            className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full hover:bg-teal-200 transition-colors"
          >
            {post.category}
          </Link>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-teal-600 transition-colors">{post.title}</h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  )
}
