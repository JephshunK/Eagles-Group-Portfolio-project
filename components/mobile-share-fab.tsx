"use client"

import { useState } from "react"
import { Share2, X, Twitter, Facebook, Linkedin, Link2, Check, MessageCircle } from "lucide-react"

interface MobileShareFabProps {
  url: string
  title: string
  description?: string
}

export default function MobileShareFab({ url, title, description = "" }: MobileShareFabProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Ensure we're using the full URL
  const fullUrl = url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}${url}`

  // Prepare sharing data
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  // Sharing URLs
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  const emailUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`

  // Copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  // Native share API
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: description,
          url: fullUrl,
        })
        .catch((error) => console.log("Error sharing", error))
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close share menu"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col gap-3 pt-4">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter size={18} className="text-[#1DA1F2]" />
              <span>Twitter</span>
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook size={18} className="text-[#1877F2]" />
              <span>Facebook</span>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={18} className="text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Share via Email"
            >
              <MessageCircle size={18} className="text-gray-700" />
              <span>Email</span>
            </a>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Copy link"
            >
              {copied ? <Check size={18} className="text-green-600" /> : <Link2 size={18} className="text-teal-600" />}
              <span>{copied ? "Copied!" : "Copy Link"}</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleNativeShare}
          className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-lg hover:bg-teal-700 transition-colors"
          aria-label="Share this post"
        >
          <Share2 size={20} />
        </button>
      )}
    </div>
  )
}
