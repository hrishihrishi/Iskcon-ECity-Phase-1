"use client";

import { useEffect, useState } from "react";
import { getAllBlogs, Blog } from "@/app/(client_modules)/blog/blog.actions";

export default function AdminPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    body: "",
    tags: "",
  });

  useEffect(() => {
    getAllBlogs().then(setBlogs);
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

  return (
    <div className="min-h-screen bg-[#F4EFE6] p-8 font-serif text-[#4A3B32]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold">Blog Manager</h1>
          <button
            onClick={() => openModal()}
            className="bg-[#4A3B32] text-[#FDFBF7] px-6 py-2 rounded-sm shadow-md hover:bg-[#3A2B22]"
          >
            New +
          </button>
        </div>

        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex items-center justify-between rounded-sm border-2 border-[#D4C3B3] bg-[#FDFBF7] p-4"
            >
              <span className="text-xl font-semibold">{blog.title}</span>
              <div className="space-x-2">
                <button
                  onClick={() => openModal(blog)}
                  className="bg-amber-700/20 px-3 py-1 text-amber-900 rounded-sm"
                >
                  Edit
                </button>
                <button className="bg-red-700/20 px-3 py-1 text-red-900 rounded-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-sm border-2 border-[#D4C3B3] bg-[#FDFBF7] p-6 shadow-2xl">
              <h2 className="mb-4 text-2xl font-bold">
                {formData.id ? "Edit Scroll" : "Inscribe New Scroll"}
              </h2>

              <input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Title"
                className="mb-4 w-full rounded-sm border-2 border-[#D4C3B3] p-2 bg-[#F4EFE6]"
              />
              <textarea
                value={formData.body}
                onChange={(e) =>
                  setFormData({ ...formData, body: e.target.value })
                }
                placeholder="Body..."
                rows={5}
                className="mb-4 w-full rounded-sm border-2 border-[#D4C3B3] p-2 bg-[#F4EFE6]"
              />
              <input
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
                placeholder="Tags (comma separated)"
                className="mb-6 w-full rounded-sm border-2 border-[#D4C3B3] p-2 bg-[#F4EFE6]"
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-[#D4C3B3] rounded-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-[#4A3B32] text-[#FDFBF7] px-4 py-2 rounded-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
