"use client";

import { Blog } from "@/app/(client_modules)/blog/blog.actions";
import Link from "next/link";

export default function BlogCard({ data }: { data: Blog }) {
  return (
    <Link href={`/blog/${data.id}`}>
      <div className="group h-full cursor-pointer rounded-2xl border border-amber-900/10 bg-white p-6 md:p-8 font-sans shadow-[0_4px_20px_rgba(200,77,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#e8621a]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#745849]">
              {data.date}
            </span>
          </div>

          <h2 className="mb-3 text-xl md:text-2xl font-serif font-bold text-[#221b00] group-hover:text-[#e8621a] transition-colors">
            {data.title}
          </h2>

          <p className="mb-6 line-clamp-3 text-[#4f453f] text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {data.tags.slice(0, 5).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#fff3d2] text-[#745849]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-amber-900/10 pt-4 text-xs font-semibold text-[#745849]">
            <span className="flex items-center gap-2">
              <span>👍 {data.likes}</span>
              <span>•</span>
              <span>👎 {data.dislikes}</span>
            </span>
            <span>💬 {data.comments.length} Comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
