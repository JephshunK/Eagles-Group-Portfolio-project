"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import SearchButton from "@/components/search-button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-teal-600">
            Eagles
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-teal-600 transition-colors">
              Skills
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-teal-600 transition-colors">
              Projects
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-teal-600 transition-colors">
              Team
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </Link>
            <SearchButton />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <SearchButton />
            <button
              className="ml-2 text-gray-700 hover:text-teal-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#about"
              className="block text-gray-700 hover:text-teal-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="block text-gray-700 hover:text-teal-600 transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="block text-gray-700 hover:text-teal-600 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="block text-gray-700 hover:text-teal-600 transition-colors"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-teal-600 transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-teal-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
