"use server";

import connectDB from "@/lib/mongodb";
import BlogModel, { IBlog } from "@/models/blog.model";
import { revalidatePath } from "next/cache";

export type Comment = {
  id: string;
  text: string;
  author: string;
};

export type Blog = {
  id: string;
  title: string;
  description: string;
  body: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
  date: string;
  tags: string[];
};

// Helper function to map MongoDB document to plain Blog object
function serializeBlog(doc: IBlog): Blog {
  return {
    id: doc._id.toString(),
    title: doc.title,
    description: doc.description,
    body: doc.body,
    likes: doc.likes ?? 0,
    dislikes: doc.dislikes ?? 0,
    comments: (doc.comments || []).map((c) => ({
      id: c.id,
      text: c.text,
      author: c.author,
    })),
    date: doc.date || new Date(doc.createdAt).toISOString().split("T")[0],
    tags: doc.tags || [],
  };
}

export async function getAllBlogs(): Promise<Blog[]> {
  await connectDB();
  const blogs = await BlogModel.find({}).sort({ createdAt: -1 }).exec();
  return blogs.map(serializeBlog);
}

export async function getBlog(id: string): Promise<Blog | null> {
  await connectDB();
  if (!id || id.length !== 24) return null;
  const blog = await BlogModel.findById(id).exec();
  return blog ? serializeBlog(blog) : null;
}

export async function updateLikesDislikes(
  id: string,
  type: "like" | "dislike"
): Promise<Blog | null> {
  await connectDB();
  if (!id || id.length !== 24) return null;

  const update =
    type === "like" ? { $inc: { likes: 1 } } : { $inc: { dislikes: 1 } };

  const updatedBlog = await BlogModel.findByIdAndUpdate(id, update, {
    new: true,
  }).exec();

  if (updatedBlog) {
    revalidatePath(`/blog/${id}`);
    revalidatePath("/blog");
    return serializeBlog(updatedBlog);
  }
  return null;
}

export async function addComment(
  id: string,
  text: string,
  author: string = "Traveler"
): Promise<Blog | null> {
  await connectDB();
  if (!id || id.length !== 24) return null;

  const newComment = {
    id: Date.now().toString(),
    text,
    author,
  };

  const updatedBlog = await BlogModel.findByIdAndUpdate(
    id,
    { $push: { comments: newComment } },
    { new: true }
  ).exec();

  if (updatedBlog) {
    revalidatePath(`/blog/${id}`);
    return serializeBlog(updatedBlog);
  }
  return null;
}

export async function createBlog(data: {
  title: string;
  description?: string;
  body: string;
  tags?: string[];
}): Promise<Blog> {
  await connectDB();
  
  const description =
    data.description ||
    (data.body.length > 150 ? data.body.substring(0, 150) + "..." : data.body);

  const newBlog = await BlogModel.create({
    title: data.title,
    description,
    body: data.body,
    tags: data.tags || [],
    date: new Date().toISOString().split("T")[0],
    likes: 0,
    dislikes: 0,
    comments: [],
  });

  revalidatePath("/blog");
  revalidatePath("/blog/admin");
  return serializeBlog(newBlog);
}

export async function updateBlog(
  id: string,
  data: {
    title?: string;
    description?: string;
    body?: string;
    tags?: string[];
  }
): Promise<Blog | null> {
  await connectDB();
  if (!id || id.length !== 24) return null;

  const updatedBlog = await BlogModel.findByIdAndUpdate(id, data, {
    new: true,
  }).exec();

  if (updatedBlog) {
    revalidatePath(`/blog/${id}`);
    revalidatePath("/blog");
    revalidatePath("/blog/admin");
    return serializeBlog(updatedBlog);
  }
  return null;
}

export async function deleteBlog(id: string): Promise<boolean> {
  await connectDB();
  if (!id || id.length !== 24) return false;

  const res = await BlogModel.findByIdAndDelete(id).exec();
  if (res) {
    revalidatePath("/blog");
    revalidatePath("/blog/admin");
    return true;
  }
  return false;
}