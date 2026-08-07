import { getAllBlogs } from "@/app/(client_modules)/blog/blog.actions";
import BlogCard from "@/shared/componentsCreatedByMe/BlogCard";

export default async function BlogHome() {
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen bg-[#F4EFE6] px-6 py-12 font-serif text-[#4A3B32]">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-5xl font-extrabold tracking-tight">
          The Archives
        </h1>

        {/* Mock Search & Filter */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row justify-center">
          <input
            type="text"
            placeholder="Search the scripts..."
            className="w-full sm:w-96 rounded-sm border-2 border-[#D4C3B3] bg-[#FDFBF7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-800/50"
          />
          <select className="rounded-sm border-2 border-[#D4C3B3] bg-[#FDFBF7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-800/50">
            <option>All Tags</option>
            <option>HTML</option>
            <option>CSS</option>
          </select>
        </div>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard data={blog} key={blog.id} />
          ))}
        </section>
      </div>
    </div>
  );
}
