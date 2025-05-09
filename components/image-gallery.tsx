"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ProjectImage } from "@/types/project"

interface ImageGalleryProps {
  images: ProjectImage[]
  className?: string
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
    document.body.style.overflow = ""
  }

  const goToPrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % images.length)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex === null) return

    if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    } else if (e.key === "Escape") {
      closeLightbox()
    }
  }

  return (
    <div className={cn("", className)}>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video cursor-pointer rounded-md overflow-hidden hover:opacity-90 transition-opacity"
            onClick={() => openLightbox(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 text-white hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              className="absolute right-4 text-white hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Current image */}
            <div className="relative w-full h-[calc(100%-100px)] flex items-center justify-center">
              <Image
                src={images[selectedIndex].src || "/placeholder.svg"}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Caption */}
            {images[selectedIndex].caption && (
              <div className="mt-4 text-white text-center max-w-2xl">
                <p>{images[selectedIndex].caption}</p>
              </div>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
