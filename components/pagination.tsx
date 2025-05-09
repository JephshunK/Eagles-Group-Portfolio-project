"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  baseUrl?: string
}

export default function Pagination({ totalItems, itemsPerPage, currentPage, baseUrl }: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // If there's only one page, don't show pagination
  if (totalPages <= 1) return null

  // Create a new URLSearchParams instance for building URLs
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    return baseUrl || `${pathname}?${params.toString()}`
  }

  // Determine which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = []

    // Always show first page
    pageNumbers.push(1)

    // Calculate range of pages to show around current page
    let startPage = Math.max(2, currentPage - 1)
    let endPage = Math.min(totalPages - 1, currentPage + 1)

    // Adjust if we're near the beginning
    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages - 1)
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 4)
    }

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageNumbers.push("ellipsis-start")
    }

    // Add page numbers in the middle
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push("ellipsis-end")
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className="flex justify-center items-center space-x-1 mt-8" aria-label="Pagination">
      {/* Previous page button */}
      {currentPage > 1 ? (
        <Link href={createPageUrl(currentPage - 1)}>
          <Button variant="outline" size="icon" className="h-9 w-9 border-gray-200" aria-label="Previous page">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 opacity-50 cursor-not-allowed"
          disabled
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      {/* Page numbers */}
      {pageNumbers.map((page, index) => {
        if (page === "ellipsis-start" || page === "ellipsis-end") {
          return (
            <span key={`ellipsis-${index}`} className="h-9 w-9 flex items-center justify-center text-gray-500">
              <MoreHorizontal className="h-4 w-4" />
            </span>
          )
        }

        const pageNum = page as number
        const isCurrentPage = pageNum === currentPage

        return (
          <Link key={pageNum} href={createPageUrl(pageNum)}>
            <Button
              variant={isCurrentPage ? "default" : "outline"}
              size="icon"
              className={`h-9 w-9 ${isCurrentPage ? "bg-teal-600 hover:bg-teal-700" : "border-gray-200"}`}
              aria-label={`Page ${pageNum}`}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              {pageNum}
            </Button>
          </Link>
        )
      })}

      {/* Next page button */}
      {currentPage < totalPages ? (
        <Link href={createPageUrl(currentPage + 1)}>
          <Button variant="outline" size="icon" className="h-9 w-9 border-gray-200" aria-label="Next page">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 opacity-50 cursor-not-allowed"
          disabled
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </nav>
  )
}
