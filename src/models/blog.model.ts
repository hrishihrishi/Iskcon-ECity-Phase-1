import mongoose, { Document, Model, Schema } from "mongoose";

export interface IComment {
  id: string;
  text: string;
  author: string;
  createdAt?: Date;
}

export interface IBlog extends Document {
  title: string;
  description: string;
  body: string;
  likes: number;
  dislikes: number;
  comments: IComment[];
  date: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true, default: "Traveler" },
  },
  { _id: false, timestamps: true }
);

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    body: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: { type: [CommentSchema], default: [] },
    date: { type: String, required: true },
    tags: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
