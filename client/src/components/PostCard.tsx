import React from 'react'
import Image from 'next/image';
import { Post } from '../mock/post';
import { LuMessageSquare as Comment} from 'react-icons/lu';
import { LuThumbsUp as Like} from 'react-icons/lu';
import { FaCircleDot as Dot } from 'react-icons/fa6';




export default function PostCard({post}: {post: Post }) {
  return (
    <article className='bg-gruvgray/50 justify-center items-center rounded-2xl '>
      <header className='flex items-center gap-3 px-4 pt-3'>
        <div className='w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full overflow-hidden hover:scale-110 duration-300 cursor-pointer'>
         
            {(post.authorAvatar)
              ? <Image src={post.authorAvatar} alt={post.authorName} width={32} height={32} className="rounded-full object-cover"/>
              : <span className="font-semibold">{post.authorName?.[0]?.toUpperCase()}</span>}
        </div>

          <div className='flex items-center gap-3 flex-1'>
          <p className="text-[13px] font-semibold uppercase tracking-wide">{post.authorName}</p>
          <Dot className="size-1.5"/>
          <p className="text-[11px] text-gruvorange">
              {new Date(post.date).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
          </p>
          <span className=' flex ml-auto text-[13px] font-semibold uppercase tracking-wide'>CS353</span>

          </div>
      </header>
      <div>
        <h1 className='px-4 pt-2 text-lg font-bold'>{post.heading}</h1>
        <p className='px-4 pb-2 text-sm'>{post.content}</p>
      </div>
      <div>
              <Image src={post.postImage} alt="Post Image" width={600} height={400} className="w-full max-h-96 object-cover"/>
      </div>
      
      <footer className='px-4 flex justify-end gap-4 py-2'>
        <button className=''>
          <Like className='hover:scale-125 duration-300 cursor-pointer' /><span className='text-xs'>{post.likeCount}</span>
        </button>
        <button>
          <Comment className='hover:scale-125 duration-300 cursor-pointer '/><span className='text-xs '>{post.commentCount}</span>
        </button>
      </footer>
    </article>
  )
}
