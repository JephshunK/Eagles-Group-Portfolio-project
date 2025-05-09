"use client"

import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchButton() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/blog/search")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="text-gray-700 hover:text-teal-600 hover:bg-transparent"
      aria-label="Search blog"
    >
      <Search className="h-5 w-5" />
    </Button>
  )
}
