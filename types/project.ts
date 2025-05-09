export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  id: number
  title: string
  slug: string
  description: string
  longDescription?: string[]
  images: ProjectImage[]
  tags: string[]
  date: string
  category: string
  featured?: boolean
}
