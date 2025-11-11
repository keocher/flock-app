import { PostModel } from "../models/Post.js";
import connectDB from "../connectDB.js";

const seedPosts = async () => {
  await connectDB();

  await PostModel.insertMany([
    {
      authorName: "John Doe",
      heading: "Hello World",
      content: "This is my first post!",
      date: new Date("2024-06-01T10:00:00Z"),
      authorAvatar: "",
      postImage: "/post-image01.jpg",
      likeCount: 10,
      commentCount: 2,
    },
    {
      authorName: "Jane Smith",
      heading: "Second Post",
      content: "Another great update!",
      date: new Date("2024-06-02T12:00:00Z"),
      authorAvatar: "",
      postImage: "/post-image02.jpg",
      likeCount: 5,
      commentCount: 1,
    },
  ]);

  console.log("✅ Posts seeded to MongoDB");
  process.exit(0);
};

seedPosts();
