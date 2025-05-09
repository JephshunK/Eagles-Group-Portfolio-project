import { Code, Palette, Zap, Users, Database, Globe, Layers, Terminal, type LucideIcon } from "lucide-react"

interface SkillCardProps {
  title: string
  description: string
  icon: string
}

export default function SkillCard({ title, description, icon }: SkillCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "Code":
        return Code
      case "Palette":
        return Palette
      case "Zap":
        return Zap
      case "Users":
        return Users
      case "Database":
        return Database
      case "Globe":
        return Globe
      case "Layers":
        return Layers
      default:
        return Terminal
    }
  }

  const IconComponent = getIcon()

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
        <IconComponent className="h-6 w-6 text-teal-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
