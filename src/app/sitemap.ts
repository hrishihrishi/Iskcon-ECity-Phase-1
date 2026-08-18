// src/app/sitemap.ts

import { MetadataRoute } from "next";
import connectDB from "@/lib/mongodb";
import BlogModel from "@/models/blog.model";

const BASE_URL = "https://iskcon-e-city-phase-1-two.vercel.app/";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── Static routes ───────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/donate`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/seva`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/vaishnava-calendar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // ── Dynamic blog routes ─────────────────────────────────────────────────────
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    await connectDB();
    const blogs = await BlogModel.find({}, { _id: 1, createdAt: 1 })
      .lean()
      .exec();

    blogRoutes = blogs.map((blog) => ({
      url: `${BASE_URL}/blog/${(blog._id as { toString(): string }).toString()}`,
      lastModified: blog.createdAt
        ? new Date(blog.createdAt as unknown as string)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch {
    // Non-fatal: sitemap still returns static routes if DB is unavailable
    console.warn("[sitemap] Could not fetch blog posts from database.");
  }

  return [...staticRoutes, ...blogRoutes];
}
