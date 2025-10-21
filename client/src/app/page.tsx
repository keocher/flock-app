import Image from "next/image";
import Sidebar from "../components/Sidebar";
import {post as posts} from "../mock/post"
import PostCard from "../components/PostCard";


export default function Home() {
  return (
    <div className="flex h-screen">
    <aside className="flex-none w-50 bg-background text-foreground min-h-screen max-h-screen ">
       <Sidebar />
    </aside>
    
       <div className="flex-1 overflow-y-auto p-10 space-y-4 ">
        {posts.map(p => <PostCard key={p.id} post={p} />)}
       </div>
    </div>
   
    
    
     );
}
