import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Linkedin, Github, Twitter, Mail, User } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import { getTeamMemberByName } from "@/data/team-members"
import { getTestimonialsByTeamMember } from "@/data/testimonials"
import { blogPosts } from "@/data/blog-posts"

interface TeamMemberPageProps {
  params: {
    name: string
  }
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = getTeamMemberByName(params.name)

  if (!member) {
    notFound()
  }

  // Get testimonials for this team member
  const memberTestimonials = getTestimonialsByTeamMember(member.id)

  // Get blog posts authored by this team member
  const memberBlogPosts = blogPosts.filter(
    (post) => post.author === member.fullName || post.author.includes(member.name),
  )

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link href="/team" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Team
          </Link>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <div className="w-full max-w-xs">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc || "/placeholder.svg"}
                    alt={member.fullName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="h-32 w-32 text-gray-400" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{member.fullName}</h1>
              <p className="text-xl text-teal-600 mb-6">{member.role}</p>

              <div className="prose prose-lg max-w-none mb-8">
                <p>{member.longBio || member.bio}</p>
              </div>

              <div className="flex space-x-4">
                {member.social?.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                )}

                {member.social?.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                    aria-label={`${member.name}'s GitHub profile`}
                  >
                    <Github size={20} />
                  </a>
                )}

                {member.social?.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter size={20} />
                  </a>
                )}

                <a
                  href={`mailto:${member.name.toLowerCase()}@eaglesteam.com`}
                  className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {getSkillsForRole(member.role).map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="font-medium text-gray-800">{skill}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Posts Section */}
          {memberBlogPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Articles by {member.name}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {memberBlogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.coverImage || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-teal-600 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{post.date}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonials Section */}
          {memberTestimonials.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Testimonials</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {memberTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    imageSrc={testimonial.imageSrc}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Helper function to get skills based on role
function getSkillsForRole(role: string): string[] {
  switch (role) {
    case "Frontend Developer":
      return [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Responsive Design",
        "UI Development",
        "Tailwind CSS",
        "Next.js",
        "Web Accessibility",
      ]
    case "Backend Developer":
      return [
        "Node.js",
        "Express",
        "Database Design",
        "API Development",
        "Authentication",
        "Server Management",
        "Performance Optimization",
        "Security",
      ]
    case "UX Designer":
      return [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Information Architecture",
        "Figma",
        "UI Design",
        "Interaction Design",
      ]
    case "Data Analyst":
      return [
        "Data Visualization",
        "Statistical Analysis",
        "SQL",
        "Excel",
        "Python",
        "R",
        "Business Intelligence",
        "Data Cleaning",
      ]
    default:
      return ["Teamwork", "Communication", "Problem Solving", "Project Management"]
  }
}
