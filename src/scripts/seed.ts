import dotenv from "dotenv";
dotenv.config();

import connectDB from "../lib/mongodb";
import Blog from "../models/blog.model";

const sampleBlogs = [
  {
    title: "Why chant Hare Krishna",
    description:
      "Uncovering the hidden spiritual science and transformative power of the Hare Krishna Maha-Mantra.",
    body: "Chanting the Hare Krishna Maha-Mantra is considered the recommended spiritual process for Kali-yuga. The sound vibration cleanses the mirror of the heart, extinguishing the burning fire of material existence...",
    likes: 42,
    dislikes: 2,
    comments: [
      { id: "c1", text: "Truly a masterpiece and inspiring read.", author: "Scholar" },
    ],
    date: new Date().toISOString().split("T")[0],
    tags: ["Philosophy", "Mantra", "Bhakti", "Japa"],
  },
  {
    title: "Sattva Raja Tama guna",
    description:
      "Understanding the three modes of material nature and how they govern human behavior.",
    body: "Material nature consists of three gunas: Sattva (goodness), Rajas (passion), and Tamas (ignorance). By elevating oneself to Sattva and ultimately transcendental goodness (visuddha-sattva), one attains peace and clarity...",
    likes: 120,
    dislikes: 5,
    comments: [
      { id: "c2", text: "Very practical breakdown of the 3 modes.", author: "Devotee" },
    ],
    date: new Date().toISOString().split("T")[0],
    tags: ["Guna", "Philosophy", "Bhagavad Gita"],
  },
];

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();
    console.log("Connected to MongoDB.");

    console.log("Clearing existing blogs...");
    await Blog.deleteMany({});

    console.log("Inserting sample blogs...");
    const createdBlogs = await Blog.insertMany(sampleBlogs);
    console.log(`Successfully seeded ${createdBlogs.length} blogs!`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
