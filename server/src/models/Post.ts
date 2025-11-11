import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    authorId: { type: String, required: true },
    authorName: { type: String },
    heading: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    authorAvatar: { type: String },
    postImage: { type: String },
    likeCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    visibility: {
      type: String,
      enum: ["public", "course", "private"],
      default: "public",
    },
  },
  { timestamps: true },
);

export const PostModel = mongoose.model("Post", postSchema);
