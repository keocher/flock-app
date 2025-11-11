import CreatePost from "@/components/CreatePost";
import Sidebar from "@/components/Sidebar";
export default function AddPost() {
  return (
   <>
   <div className="flex min-h-screen min-w-screen">
    <aside className="flex-none w-50 bg-background text-foreground min-h-screen max-h-screen ">
       <Sidebar />
    </aside>
    <div className="flex-1 flex justify-center items-start px-10 pt-20">
      <CreatePost />
    </div>
    
    </div>
    
   </>
  );
}