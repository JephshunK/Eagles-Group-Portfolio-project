"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BlogSearch({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const clearSearch = () => {
    setQuery("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Handle keyboard shortcut (Ctrl+K or Cmd+K) to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`pl-10 pr-10 py-2 w-full rounded-full border ${
            isFocused ? "border-teal-500 ring-1 ring-teal-500" : "border-gray-300"
          }`}
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
        <Button
          type="submit"
          size="sm"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-7 px-3 bg-teal-600 hover:bg-teal-700"
          disabled={!query.trim()}
        >
          Search
        </Button>
      </div>
      <div className="hidden md:block absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
        <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs">⌘K</kbd>
      </div>
    </form>
  )
}
