import { ImageResponse } from "next/og"
import { blogPosts } from "@/data/blog-posts"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#334155",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 24 }}>Eagles Team</div>
        <div>Blog Post Not Found</div>
      </div>,
      { ...size },
    )
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        fontSize: 48,
        background: "linear-gradient(to right, #14b8a6, #1e40af)",
        color: "white",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 48,
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 24, maxWidth: "80%" }}>{post.title}</div>
      <div style={{ fontSize: 32, marginBottom: 48, maxWidth: "80%", opacity: 0.9 }}>{post.excerpt}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          <div style={{ marginRight: 16 }}>{post.author}</div>
          <div style={{ marginRight: 16 }}>•</div>
          <div>{post.date}</div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 48,
          display: "flex",
          alignItems: "center",
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        Eagles Team
      </div>
    </div>,
    { ...size },
  )
}
