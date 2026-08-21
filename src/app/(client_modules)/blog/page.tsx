// src/app/(client_modules)/blog/page.tsx

import type { Metadata } from "next";
import { getAllBlogs } from "@/app/(client_modules)/blog/blog.actions";
import BlogCard from "@/shared/componentsCreatedByMe/BlogCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Devotional Blog | Spiritual Articles & Temple Updates",
  description:
    "Read spiritual insights, Bhakti Yoga teachings, festival updates, and temple news from ISKCON Electronic City, Bengaluru. Explore articles on Krishna consciousness, prasadam, and devotional life in E-City.",
  alternates: {
    canonical: "https://iskcon-e-city-phase-1-two.vercel.app/blog",
  },
  openGraph: { url: "https://iskcon-e-city-phase-1-two.vercel.app/blog" },
};

export default async function BlogHome() {
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen bg-[#add8e8] px-5 md:px-8 py-12 md:py-16 text-[#221b00]">
      <div className="mx-auto max-w-7xl">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#745849] block mb-2">
            Spiritual Insights &amp; Articles
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#221b00] tracking-tight mb-4">
            The Devotional Blog
          </h1>
          <p className="text-[#4f453f] text-base md:text-lg">
            Explore wisdom, teachings, and temple updates preserved for the
            community.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row justify-center max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full sm:w-96 rounded-full border border-amber-900/20 bg-white px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8621a]/50 shadow-sm"
          />
          <select className="rounded-full border border-amber-900/20 bg-white px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8621a]/50 shadow-sm">
            <option>All Tags</option>
            <option>Philosophy</option>
            <option>Festivals</option>
            <option>Prasadam</option>
          </select>
        </div>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard data={blog} key={blog.id} />)
          ) : (
            <p className="col-span-full text-center text-[#745849]">
              No blog posts available at the moment.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
