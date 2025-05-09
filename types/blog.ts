export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string[]
  author: string
  authorRole: string
  authorBio: string
  authorImage: string
  date: string
  category: string
  readTime: number
  coverImage: string
}
