import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">Our Projects</h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Explore our portfolio of projects and see how we've applied our skills to create meaningful digital
            experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.images[0].src}
                tags={project.tags}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
