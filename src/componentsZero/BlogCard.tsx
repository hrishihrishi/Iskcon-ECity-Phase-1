"use client";

import { Blog } from "@/actions/blogActions";
import Link from "next/link";

export default function BlogCard({ data }: { data: Blog }) {
  const tagColors = ["bg-red-900/10 text-red-900", "bg-amber-900/10 text-amber-900", "bg-emerald-900/10 text-emerald-900", "bg-indigo-900/10 text-indigo-900", "bg-stone-900/10 text-stone-900"];

  return (
    <Link href={`/blog/${data.id}`}>
      <div className="group h-full cursor-pointer rounded-sm border-2 border-[#D4C3B3] bg-[#FDFBF7] p-6 font-serif shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[#D4C3B3]/50 hover:shadow-xl">
        <h2 className="mb-2 text-2xl font-bold text-[#4A3B32]">{data.title}</h2>
        <p className="mb-4 text-sm text-[#705C4C]">{data.date}</p>
        <p className="mb-4 line-clamp-3 text-[#5A4A40]">{data.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {data.tags.slice(0, 5).map((tag, idx) => (
            <span key={idx} className={`px-2 py-1 text-xs font-semibold rounded ${tagColors[idx % tagColors.length]}`}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-[#D4C3B3] pt-4 text-sm text-[#705C4C]">
          <span>👍 {data.likes} | 👎 {data.dislikes}</span>
          <span>📜 {data.comments.length} Comments</span>
        </div>
      </div>
    </Link>
  );
}