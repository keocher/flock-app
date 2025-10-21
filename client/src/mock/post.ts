import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type Post = {
  id: number;
  authorName: string;
  heading: string;
  content: string;
  date: string;
  authorAvatar: string;
  postImage: string;
  likeCount: number;
  commentCount: number;
};

export const post: Post[] = [

{
    id: 1,
    authorName: "John Doe",
    heading: "Hello World",
    content: "This is my first post!",
    date: "2024-06-01T10:00:00Z",
    authorAvatar:"",
    postImage:"/post-image01.jpg",
    likeCount: 10,
    commentCount: 2,
},
{
    id: 2,
    authorName: "John Doe",
    heading: "Hello World",
    content: "This is my first post!",
    date : "2024-06-01T10:00:00Z",
    authorAvatar:"",
    postImage:"/post-image01.jpg",
    likeCount: 10,
    commentCount: 2,
},
{
    id: 3,
    authorName: "John Doe",
    heading: "Hello World",
    content: "This is my first post!",
    date : "2024-06-01T10:00:00Z",
    authorAvatar:"",
    postImage:"/post-image01.jpg",
    likeCount: 10,
    commentCount: 2,
}

];