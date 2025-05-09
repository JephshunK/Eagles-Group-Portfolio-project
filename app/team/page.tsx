import Image from "next/image"
import { Linkedin, Github, Twitter, Mail, User } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { teamMembers } from "@/data/team-members"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">Our Team</h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Meet the passionate individuals behind Eagles. We combine our diverse skills and perspectives to create
            meaningful digital experiences.
          </p>

          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
              >
                <div className="w-full md:w-1/3">
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

                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{member.fullName}</h2>
                  <p className="text-xl text-teal-600 mb-6">{member.role}</p>

                  <div className="prose prose-lg max-w-none mb-6">
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
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
