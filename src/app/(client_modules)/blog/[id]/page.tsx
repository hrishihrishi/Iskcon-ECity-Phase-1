"use client";

import { use, useEffect, useState } from "react";
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
      author: "Traveler",
    };
    // Optimistic UI Update
    setBlog({ ...blog, comments: [...blog.comments, tempComment] });
    setNewComment("");
    await addComment(blog.id, newComment);
  };

  if (!blog)
    return (
      <div className="p-10 font-serif text-center text-[#4A3B32]">
        Unrolling scroll...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F4EFE6] px-4 py-12 font-serif text-[#4A3B32]">
      <article className="mx-auto max-w-3xl rounded-sm border-2 border-[#D4C3B3] bg-[#FDFBF7] p-8 shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
        <p className="mb-8 border-b-2 border-[#D4C3B3] pb-4 text-sm italic text-[#705C4C]">
          {blog.date}
        </p>

        <section className="prose mb-12 text-lg leading-relaxed text-[#5A4A40]">
          {blog.body}
        </section>

        <div className="mb-12 flex gap-4">
          <button
            onClick={() => handleVote("like")}
            className="rounded-sm bg-[#D4C3B3] px-4 py-2 hover:bg-[#C3B2A2]"
          >
            👍 {blog.likes}
          </button>
          <button
            onClick={() => handleVote("dislike")}
            className="rounded-sm bg-[#D4C3B3] px-4 py-2 hover:bg-[#C3B2A2]"
          >
            👎 {blog.dislikes}
          </button>
        </div>

        <section className="border-t-2 border-dashed border-[#D4C3B3] pt-8">
          <h3 className="mb-6 text-2xl font-semibold">
            Scribe Notes ({blog.comments.length})
          </h3>

          <div className="mb-8 flex gap-2">
            <input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Leave a mark..."
              className="flex-1 rounded-sm border-2 border-[#D4C3B3] bg-[#F4EFE6] p-2 focus:outline-none"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-[#4A3B32] text-[#FDFBF7] px-4 py-2 rounded-sm"
            >
              Inscribe
            </button>
          </div>

          <div className="space-y-4">
            {blog.comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-sm bg-[#F4EFE6] p-4 border border-[#D4C3B3]"
              >
                <p className="mb-2 text-sm font-bold text-[#705C4C]">
                  {comment.author}
                </p>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
