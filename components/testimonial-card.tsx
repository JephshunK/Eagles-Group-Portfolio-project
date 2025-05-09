import Image from "next/image"

interface TestimonialCardProps {
  content: string
  author: string
  role: string
  company: string
  imageSrc?: string
}

export default function TestimonialCard({ content, author, role, company, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-teal-600 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="text-gray-500 italic">{content}</div>
      </div>
      <div className="flex items-center">
        {imageSrc && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={imageSrc || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
        )}
        <div>
          <div className="font-medium text-gray-800">{author}</div>
          <div className="text-sm text-gray-500">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  )
}
