import Image from "next/image";
import Sidebar from "../components/Sidebar";
import {post as posts} from "../mock/post"
import PostCard from "../components/PostCard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value; // token is string | undefined

  if (token) {
    // optionally verify token here
    // redirect to /home
    redirect("/home");
  } else {
    // redirect to /login
    redirect("/login");
  }

  // return fallback UI if needed (code won't reach here after redirect)
  return null;
}
