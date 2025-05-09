import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  slug: string
}

export default function ProjectCard({ title, description, imageSrc, tags, slug }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/projects/${slug}`}>
        <div className="relative h-48 w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-teal-600 transition-colors">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
