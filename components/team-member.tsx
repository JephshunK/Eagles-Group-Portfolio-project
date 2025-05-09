import Image from "next/image"
import { User } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  imageSrc?: string
}

export default function TeamMember({ name, role, bio, imageSrc }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 bg-gray-100 border border-gray-200">
        {imageSrc ? (
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="h-24 w-24 text-gray-400" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-teal-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  )
}
