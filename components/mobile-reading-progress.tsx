"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function MobileReadingProgress() {
  const [progress, setProgress] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const calculateReadingProgress = () => {
      const content = document.querySelector("article")
      if (!content) return

      const contentBox = content.getBoundingClientRect()
      const contentHeight = contentBox.height
      const contentTop = contentBox.top
      const windowHeight = window.innerHeight

      // Calculate how much of the article is below the viewport
      const distanceFromTop = Math.abs(contentTop)
      // Calculate the total scrollable distance
      const totalScrollDistance = contentHeight - windowHeight

      // Calculate progress percentage
      let currentProgress = (distanceFromTop / totalScrollDistance) * 100

      // Ensure progress is between 0 and 100
      currentProgress = Math.min(Math.max(currentProgress, 0), 100)

      setProgress(currentProgress)
    }

    // Initial calculation
    calculateReadingProgress()

    // Add scroll event listener
    window.addEventListener("scroll", calculateReadingProgress)

    // Clean up event listener
    return () => window.removeEventListener("scroll", calculateReadingProgress)
  }, [])

  if (!isMobile) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 z-50 bg-gray-200">
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
  )
}
