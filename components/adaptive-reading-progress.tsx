"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface AdaptiveReadingProgressProps {
  title: string
  estimatedReadTime: number
}

export default function AdaptiveReadingProgress({ title, estimatedReadTime }: AdaptiveReadingProgressProps) {
  const [progress, setProgress] = useState(0)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [timeLeft, setTimeLeft] = useState(estimatedReadTime)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const calculateReadingProgress = () => {
      const content = document.querySelector("article")
      if (!content) return

      const contentBox = content.getBoundingClientRect()
      const contentHeight = contentBox.height
      const contentTop = contentBox.top
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // Calculate how much of the article is below the viewport
      const distanceFromTop = Math.abs(contentTop)
      // Calculate the total scrollable distance
      const totalScrollDistance = contentHeight - windowHeight

      // Calculate progress percentage
      let currentProgress = (distanceFromTop / totalScrollDistance) * 100

      // Ensure progress is between 0 and 100
      currentProgress = Math.min(Math.max(currentProgress, 0), 100)

      // Calculate estimated time left based on progress
      const newTimeLeft = Math.ceil(estimatedReadTime * (1 - currentProgress / 100))

      setProgress(currentProgress)
      setTimeLeft(newTimeLeft)
      setShowScrollToTop(scrollY > 300)
    }

    // Initial calculation
    calculateReadingProgress()

    // Add scroll event listener
    window.addEventListener("scroll", calculateReadingProgress)

    // Clean up event listener
    return () => window.removeEventListener("scroll", calculateReadingProgress)
  }, [estimatedReadTime])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Simple progress bar at the top for all devices */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200">
        <div
          className="h-full bg-teal-600 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reading progress"
        />
      </div>

      {/* Enhanced progress indicator for desktop */}
      {!isMobile && (
        <div
          className={`fixed top-16 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ${
            progress > 5 ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="truncate pr-4 font-medium text-gray-800">{title}</div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">{timeLeft > 0 ? `${timeLeft} min left` : "Finished!"}</div>
              <div className="text-sm font-medium text-teal-600">{Math.round(progress)}% read</div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile floating indicator */}
      {isMobile && progress > 5 && (
        <div className="fixed bottom-4 right-4 z-40 bg-white rounded-full shadow-lg px-3 py-1 text-sm font-medium text-teal-600 border border-gray-200">
          {Math.round(progress)}%
        </div>
      )}

      {/* Scroll to top button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed z-40 p-2 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition-colors ${
            isMobile ? "bottom-16 right-4" : "bottom-8 right-8"
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}
