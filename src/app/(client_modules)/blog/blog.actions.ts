"use server";

export type Comment = { id: string; text: string; author: string };

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

// Dummy Database
let blogs: Blog[] = [
  {
    id: "1",
    title: "Why chant Hare Krishna",
    description: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam et reprehenderit, tempore perspiciatis ad doloremque deleniti aliquid reiciendis autem laudantium consequatur eius, enim sequi exercitationem, molestias nam corporis illo. Ad accusantium, quidem sapiente, hic autem porro totam explicabo earum expedita ullam voluptates sit ut dolorem ipsum amet velit, tempore eaque quia officiis aliquam. Ad adipisci corrupti sint similique ratione iusto, reiciendis eum excepturi praesentium minus a animi odio accusamus veritatis temporibus hic reprehenderit qui ea maiores deleniti veniam voluptatibus enim. In assumenda molestias repellat quidem, nulla sapiente maxime soluta at blanditiis minus corporis officia dolore nihil, iure sed quaerat voluptatibus ducimus accusantium harum ut similique facere recusandae commodi? Eum consequuntur nobis, aspernatur molestiae autem ducimus illo libero vero fugit eligendi, perspiciatis quis laudantium assumenda! Dolore eaque natus ea laborum tempore non dolorem in beatae nulla, quae esse quo corrupti modi id sapiente tempora unde necessitatibus fugit sint corporis architecto accusantium assumenda commodi eius. Consequuntur ex illum tenetur impedit laborum. Praesentium pariatur dolorem perspiciatis odio alias recusandae beatae amet unde totam explicabo ipsam, architecto perferendis, accusamus dolorum dicta ab possimus quis. Ipsa laborum quaerat sint tenetur, doloremque sit quis praesentium corporis porro. Atque hic minus pariatur sed recusandae eaque. Praesentium, quam.Uncovering the hidden web development secrets of the ancients.",
    body: "Long ago,        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam et reprehenderit, tempore perspiciatis ad doloremque deleniti aliquid reiciendis autem laudantium consequatur eius, enim sequi exercitationem, molestias nam corporis illo. Ad accusantium, quidem sapiente, hic autem porro totam explicabo earum expedita ullam voluptates sit ut dolorem ipsum amet velit, tempore eaque quia officiis aliquam. Ad adipisci corrupti sint similique ratione iusto, reiciendis eum excepturi praesentium minus a animi odio accusamus veritatis temporibus hic reprehenderit qui ea maiores deleniti veniam voluptatibus enim. In assumenda molestias repellat quidem, nulla sapiente maxime soluta at blanditiis minus corporis officia dolore nihil, iure sed quaerat voluptatibus ducimus accusantium harum ut similique facere recusandae commodi? Eum consequuntur nobis, aspernatur molestiae autem ducimus illo libero vero fugit eligendi, perspiciatis quis laudantium assumenda! Dolore eaque natus ea laborum tempore non dolorem in beatae nulla, quae esse quo corrupti modi id sapiente tempora unde necessitatibus fugit sint corporis architecto accusantium assumenda commodi eius. Consequuntur ex illum tenetur impedit laborum. Praesentium pariatur dolorem perspiciatis odio alias recusandae beatae amet unde totam explicabo ipsam, architecto perferendis, accusamus dolorum dicta ab possimus quis. Ipsa laborum quaerat sint tenetur, doloremque sit quis praesentium corporis porro. Atque hic minus pariatur sed recusandae eaque. Praesentium, quam.        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam et reprehenderit, tempore perspiciatis ad doloremque deleniti aliquid reiciendis autem laudantium consequatur eius, enim sequi exercitationem, molestias nam corporis illo. Ad accusantium, quidem sapiente, hic autem porro totam explicabo earum expedita ullam voluptates sit ut dolorem ipsum amet velit, tempore eaque quia officiis aliquam. Ad adipisci corrupti sint similique ratione iusto, reiciendis eum excepturi praesentium minus a animi odio accusamus veritatis temporibus hic reprehenderit qui ea maiores deleniti veniam voluptatibus enim. In assumenda molestias repellat quidem, nulla sapiente maxime soluta at blanditiis minus corporis officia dolore nihil, iure sed quaerat voluptatibus ducimus accusantium harum ut similique facere recusandae commodi? Eum consequuntur nobis, aspernatur molestiae autem ducimus illo libero vero fugit eligendi, perspiciatis quis laudantium assumenda! Dolore eaque natus ea laborum tempore non dolorem in beatae nulla, quae esse quo corrupti modi id sapiente tempora unde necessitatibus fugit sint corporis architecto accusantium assumenda commodi eius. Consequuntur ex illum tenetur impedit laborum. Praesentium pariatur dolorem perspiciatis odio alias recusandae beatae amet unde totam explicabo ipsam, architecto perferendis, accusamus dolorum dicta ab possimus quis. Ipsa laborum quaerat sint tenetur, doloremque sit quis praesentium corporis porro. Atque hic minus pariatur sed recusandae eaque. Praesentium, quam. in the era of Web 1.0, developers etched HTML into stone...",
    likes: 42,
    dislikes: 2,
    comments: [{ id: "c1", text: "Truly a masterpiece.", author: "Scholar" }],
    date: "2026-08-01",
    tags: ["History", "lord", "Ancient", "Scripture", "ExtraTag"],
  },
  {
    id: "2",
    title: "Sattva Raja Tama guna",
    description: "Transmuting basic layouts into golden grids.        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam et reprehenderit, tempore perspiciatis ad doloremque deleniti aliquid reiciendis autem laudantium consequatur eius, enim sequi exercitationem, molestias nam corporis illo. Ad accusantium, quidem sapiente, hic autem porro totam explicabo earum expedita ullam voluptates sit ut dolorem ipsum amet velit, tempore eaque quia officiis aliquam. Ad adipisci corrupti sint similique ratione iusto, reiciendis eum excepturi praesentium minus a animi odio accusamus veritatis temporibus hic reprehenderit qui ea maiores deleniti veniam voluptatibus enim. In assumenda molestias repellat quidem, nulla sapiente maxime soluta at blanditiis minus corporis officia dolore nihil, iure sed quaerat voluptatibus ducimus accusantium harum ut similique facere recusandae commodi? Eum consequuntur nobis, aspernatur molestiae autem ducimus illo libero vero fugit eligendi, perspiciatis quis laudantium assumenda! Dolore eaque natus ea laborum tempore non dolorem in beatae nulla, quae esse quo corrupti modi id sapiente tempora unde necessitatibus fugit sint corporis architecto accusantium assumenda commodi eius. Consequuntur ex illum tenetur impedit laborum. Praesentium pariatur dolorem perspiciatis odio alias recusandae beatae amet unde totam explicabo ipsam, architecto perferendis, accusamus dolorum dicta ab possimus quis. Ipsa laborum quaerat sint tenetur, doloremque sit quis praesentium corporis porro. Atque hic minus pariatur sed recusandae eaque. Praesentium, quam.",
    body: "The grid is a magical construct",
    likes: 120,
    dislikes: 5,
    comments: [],
    date: "2026-08-05",
    tags: ["Guna", "Mode", "Nature"],
  },
];

export async function getAllBlogs() {
  return blogs;
}

export async function getBlog(id: string) {
  return blogs.find((b) => b.id === id) || null;
}

export async function updateLikesDislikes(id: string, type: "like" | "dislike") {
  const blog = blogs.find((b) => b.id === id);
  if (blog) {
    type === "like" ? blog.likes++ : blog.dislikes++;
  }
  return blog;
}

export async function addComment(id: string, text: string) {
  const blog = blogs.find((b) => b.id === id);
  const newComment = { id: Date.now().toString(), text, author: "Traveler" };
  if (blog) blog.comments.push(newComment);
  return blog;
}