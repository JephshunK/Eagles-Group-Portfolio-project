import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"
import { projects } from "@/data/projects"

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link href="/#projects" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all projects
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-gray-500 mb-8">
            <span className="mr-4">{project.date}</span>
            <span>{project.category}</span>
          </div>

          <div className="mb-12">
            <ImageGallery images={project.images} />
          </div>

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About this project</h2>

            {project.longDescription ? (
              project.longDescription.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mb-4 text-gray-700">{project.description}</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
