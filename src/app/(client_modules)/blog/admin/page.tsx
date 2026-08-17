"use client";

import { useEffect, useState } from "react";
import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  Blog,
} from "@/app/(client_modules)/blog/blog.actions";

export default function AdminPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    body: "",
    tags: "",
  });

  const loadBlogs = () => {
    getAllBlogs().then(setBlogs);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const openModal = (blog?: Blog) => {
    if (blog) {
      setFormData({
        id: blog.id,
        title: blog.title,
        body: blog.body,
        tags: blog.tags.join(", "),
      });
    } else {
      setFormData({ id: "", title: "", body: "", tags: "" });
    }
    setModalOpen(true);
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.body.trim()) return;

    const tagsArray = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    if (formData.id) {
      await updateBlog(formData.id, {
        title: formData.title,
        body: formData.body,
        tags: tagsArray,
      });
    } else {
      await createBlog({
        title: formData.title,
        body: formData.body,
        tags: tagsArray,
      });
    }

    setModalOpen(false);
    loadBlogs();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      await deleteBlog(id);
      loadBlogs();
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#221b00] px-5 md:px-8 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#745849] block mb-1">
              Content Management
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#221b00]">
              Blog Manager
            </h1>
          </div>
          <button
            onClick={() => openModal()}
            className="bg-[#e8621a] hover:bg-[#d05615] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-colors duration-200 flex items-center gap-2"
          >
            <span>+</span> New Post
          </button>
        </div>

        {/* Blog List */}
        <div className="space-y-3">
          {blogs.length === 0 && (
            <div className="bg-white rounded-2xl border border-amber-900/10 p-10 text-center text-[#4f453f] italic">
              No blog posts yet. Create your first one!
            </div>
          )}
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex items-center justify-between bg-white rounded-2xl border border-amber-900/10 shadow-sm px-6 py-4 hover:shadow-md transition-shadow"
            >
              <div className="min-w-0 flex-1 pr-4">
                <p className="text-base md:text-lg font-serif font-semibold text-[#221b00] truncate">
                  {blog.title}
                </p>
                <p className="text-xs text-[#4f453f] mt-0.5">{blog.date}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => openModal(blog)}
                  className="bg-[#fff3d2] hover:bg-[#feedb7] text-[#745849] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 z-50">
            <div className="w-full max-w-lg bg-white rounded-2xl border border-amber-900/10 p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-[#221b00]">
                  {formData.id ? "Edit Post" : "New Post"}
                </h2>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-[#4f453f] hover:text-[#221b00] text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Post Title"
                  className="w-full rounded-xl border border-amber-900/20 bg-[#fff8ef] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8621a]/40 transition-all"
                />
                <textarea
                  value={formData.body}
                  onChange={(e) =>
                    setFormData({ ...formData, body: e.target.value })
                  }
                  placeholder="Write your article body here..."
                  rows={6}
                  className="w-full rounded-xl border border-amber-900/20 bg-[#fff8ef] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8621a]/40 transition-all resize-none"
                />
                <input
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  placeholder="Tags (comma separated, e.g. Philosophy, Meditation)"
                  className="w-full rounded-xl border border-amber-900/20 bg-[#fff8ef] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8621a]/40 transition-all"
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 border border-amber-900/20 rounded-full text-sm font-semibold text-[#4f453f] hover:bg-[#fff3d2] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-[#e8621a] hover:bg-[#d05615] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors shadow-sm"
                >
                  {formData.id ? "Save Changes" : "Publish"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
