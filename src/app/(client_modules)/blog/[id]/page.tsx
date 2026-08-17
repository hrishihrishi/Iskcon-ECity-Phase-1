"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  getBlog,
  updateLikesDislikes,
  addComment,
  Blog,
} from "@/app/(client_modules)/blog/blog.actions";

export default function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    getBlog(id).then(setBlog);
  }, [id]);

  const handleVote = async (type: "like" | "dislike") => {
    if (!blog) return;
    // Optimistic UI Update
    setBlog({ ...blog, [type + "s"]: blog[type + "s"] + 1 });
    await updateLikesDislikes(blog.id, type);
  };

  const handleCommentSubmit = async () => {
    if (!blog || !newComment.trim()) return;
    const tempComment = {
      id: Date.now().toString(),
      text: newComment,
      author: "Devotee",
    };
    // Optimistic UI Update
    setBlog({ ...blog, comments: [...blog.comments, tempComment] });
    setNewComment("");
    await addComment(blog.id, newComment);
  };

  if (!blog)
    return (
      <div className="min-h-screen bg-[#fff8ef] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 animate-pulse">
          <div className="w-10 h-10 rounded-full bg-[#f7d2be] flex items-center justify-center text-[#745849] text-xl">
            🪷
          </div>
          <p className="text-[#4f453f] font-serif text-lg">Unrolling scroll…</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#221b00] pt-24 md:pt-28 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-6">
        <nav className="flex items-center gap-2 text-sm text-[#4f453f]">
          <Link href="/" className="hover:text-[#e8621a] transition-colors">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-[#e8621a] transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-[#221b00] font-medium line-clamp-1">{blog.title}</span>
        </nav>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Floating TOC — desktop only */}
        <aside className="hidden md:block md:col-span-3 sticky top-28 self-start">
          <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-sm">
            <h3 className="font-serif font-bold text-[#745849] mb-4 text-base uppercase tracking-wider">
              In This Article
            </h3>
            <ul className="space-y-3 text-sm text-[#4f453f]">
              <li>
                <a href="#body" className="hover:text-[#e8621a] block border-l-2 border-transparent hover:border-[#e8621a] pl-3 transition-all">
                  {blog.title}
                </a>
              </li>
              <li>
                <a href="#reactions" className="hover:text-[#e8621a] block border-l-2 border-transparent hover:border-[#e8621a] pl-3 transition-all">
                  Reactions
                </a>
              </li>
              <li>
                <a href="#comments" className="hover:text-[#e8621a] block border-l-2 border-transparent hover:border-[#e8621a] pl-3 transition-all">
                  Comments ({blog.comments.length})
                </a>
              </li>
            </ul>

            {/* Tags */}
            {blog.tags.length > 0 && (
              <div className="mt-6 pt-6 border-t border-amber-900/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#745849] mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#fff3d2] text-[#745849] rounded-md text-xs font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Article */}
        <article className="col-span-1 md:col-span-9 lg:col-span-8">
          {/* Article header card */}
          <div className="bg-white rounded-2xl border border-amber-900/10 shadow-sm overflow-hidden mb-8">
            {/* Header stripe */}
            <div className="bg-[#745849] px-8 py-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-amber-300"></span>
                <span className="text-amber-200 text-xs font-bold uppercase tracking-widest">
                  {blog.date}
                </span>
              </div>
              <h1 id="body" className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight">
                {blog.title}
              </h1>
            </div>

            {/* Body */}
            <div className="px-8 py-10">
              <p className="text-[#4f453f] text-base md:text-lg leading-relaxed font-serif whitespace-pre-wrap">
                {blog.body}
              </p>
            </div>
          </div>

          {/* Reactions */}
          <div id="reactions" className="bg-white rounded-2xl border border-amber-900/10 shadow-sm p-6 mb-8 flex items-center gap-4">
            <button
              onClick={() => handleVote("like")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#feedb7]/80 hover:bg-[#e8621a] hover:text-white text-[#221b00] transition-colors duration-200 font-semibold text-sm"
            >
              <span>👍</span>
              <span>{blog.likes}</span>
            </button>
            <button
              onClick={() => handleVote("dislike")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#feedb7]/80 hover:bg-[#745849] hover:text-white text-[#221b00] transition-colors duration-200 font-semibold text-sm"
            >
              <span>👎</span>
              <span>{blog.dislikes}</span>
            </button>

            {/* Tags — mobile */}
            <div className="flex md:hidden flex-wrap gap-2 ml-auto">
              {blog.tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-[#fff3d2] text-[#745849] rounded-md text-xs font-semibold">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div id="comments" className="bg-white rounded-2xl border border-amber-900/10 shadow-sm p-6 md:p-8">
            <h3 className="font-serif font-bold text-[#221b00] text-xl md:text-2xl mb-6">
              Community Reflections ({blog.comments.length})
            </h3>

            {/* Comment Input */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommentSubmit()}
                placeholder="Share your reflections…"
                className="flex-1 rounded-full border border-amber-900/20 bg-[#fff8ef] px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8621a]/40 transition-all"
              />
              <button
                onClick={handleCommentSubmit}
                className="bg-[#e8621a] hover:bg-[#d05615] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors duration-200 shadow-sm shrink-0"
              >
                Post Comment
              </button>
            </div>

            {/* Comment List */}
            <div className="space-y-4">
              {blog.comments.length === 0 && (
                <p className="text-[#4f453f] text-sm text-center py-4 italic">
                  Be the first to share a reflection 🙏
                </p>
              )}
              {blog.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-[#fff8ef] rounded-xl p-4 md:p-5 border border-amber-900/10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#f7d2be] text-[#745849] flex items-center justify-center font-bold text-xs uppercase">
                      {comment.author.charAt(0)}
                    </div>
                    <p className="text-sm font-bold text-[#745849]">{comment.author}</p>
                  </div>
                  <p className="text-[#4f453f] text-sm leading-relaxed">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
