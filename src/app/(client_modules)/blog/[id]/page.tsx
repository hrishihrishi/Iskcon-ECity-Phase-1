// src/app/(client_modules)/blog/[id]/page.tsx
// NOTE: generateMetadata runs on the server; BlogDetails renders on the client.

import type { Metadata } from "next";
import BlogDetails from "./BlogDetails";
import { getBlog } from "@/app/(client_modules)/blog/blog.actions";

// ── Dynamic OG metadata per blog post ────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return {
      title: "Post Not Found",
      description:
        "This blog post could not be found on ISKCON Electronic City.",
    };
  }

  const title = `${blog.title} | ISKCON Electronic City Blog`;
  const description =
    blog.description.length > 160
      ? blog.description.slice(0, 157) + "…"
      : blog.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://iskcon-e-city-phase-1-two.vercel.app//blog/${id}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `https://iskcon-e-city-phase-1-two.vercel.app//blog/${id}`,
      publishedTime: blog.date,
      tags: blog.tags,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${blog.title} — ISKCON Electronic City`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}

// ── Page shell (server component) — renders the client component ──────────────
export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <BlogDetails params={params} />;
}
