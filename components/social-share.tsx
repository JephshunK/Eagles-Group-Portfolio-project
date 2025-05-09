"use client"

import { useState } from "react"
import { Twitter, Facebook, Linkedin, Link2, MessageCircle, Share2, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  hashtags?: string[]
  className?: string
  showLabel?: boolean
  variant?: "default" | "floating" | "minimal"
}

export default function SocialShare({
  url,
  title,
  description = "",
  hashtags = [],
  className = "",
  showLabel = false,
  variant = "default",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  // Ensure we're using the full URL
  const fullUrl = url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}${url}`

  // Prepare sharing data
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedHashtags = hashtags.join(",")

  // Sharing URLs
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`
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

  // Native share API (mobile)
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
      setShowShareMenu(!showShareMenu)
    }
  }

  // Render different variants
  if (variant === "floating") {
    return (
      <div
        className={`fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-30 hidden md:flex ${className}`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Share on Twitter</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Share on Facebook</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Share on LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Share via Email"
              >
                <MessageCircle size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Share via Email</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={copyToClipboard}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Copy link"
              >
                {copied ? <Check size={18} className="text-green-600" /> : <Link2 size={18} />}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{copied ? "Copied!" : "Copy link"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    )
  }

  if (variant === "minimal") {
    return (
      <div className={`relative ${className}`}>
        <Button variant="outline" size="sm" onClick={handleNativeShare} className="flex items-center gap-2">
          <Share2 size={16} />
          {showLabel && <span>Share</span>}
        </Button>

        {showShareMenu && !navigator.share && (
          <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg p-2 flex gap-2 border border-gray-200">
            <button
              onClick={() => setShowShareMenu(false)}
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
              aria-label="Close share menu"
            >
              <X size={14} />
            </button>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
              aria-label="Share on Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
              aria-label="Share on Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <button
              onClick={copyToClipboard}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
              aria-label="Copy link"
            >
              {copied ? <Check size={16} className="text-green-600" /> : <Link2 size={16} />}
            </button>
          </div>
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#0c85d0] text-white rounded-md transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter size={18} />
        {showLabel && <span>Twitter</span>}
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#0c5fce] text-white rounded-md transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={18} />
        {showLabel && <span>Facebook</span>}
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#084e96] text-white rounded-md transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
        {showLabel && <span>LinkedIn</span>}
      </a>
      <a
        href={emailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition-colors"
        aria-label="Share via Email"
      >
        <MessageCircle size={18} />
        {showLabel && <span>Email</span>}
      </a>
      <button
        onClick={copyToClipboard}
        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
        aria-label="Copy link"
      >
        {copied ? <Check size={18} /> : <Link2 size={18} />}
        {showLabel && <span>{copied ? "Copied!" : "Copy Link"}</span>}
      </button>
    </div>
  )
}
