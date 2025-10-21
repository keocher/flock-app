import React from 'react'
import Image from 'next/image';
import { Post } from '../mock/post';
import { LuMessageSquare as Comment} from 'react-icons/lu';
import { LuThumbsUp as Like} from 'react-icons/lu';
import { FaCircleDot as Dot } from 'react-icons/fa6';




export default function PostCard({post}: {post: Post }) {
  return (
    <article className='bg-amber-500 justify-center items-center'>
      <header className='flex items-center gap-3 p-4'>
        <div className='w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full overflow-hidden'>
         
            {(post.authorAvatar)
              ? <Image src={post.authorAvatar} alt={post.authorName} width={32} height={32} className="rounded-full object-cover"/>
              : <span className="font-semibold">{post.authorName?.[0]?.toUpperCase()}</span>}
          </div>
          <div className='flex items-center gap-3 flex-1'>
          <p className="text-[13px] font-semibold uppercase tracking-wide">{post.authorName}</p>
          <Dot className="size-1.5"/>
          <p className="text-[11px] text-slate-600">
              {new Date(post.date).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
          </p>
          <span className=' flex ml-auto text-[13px] font-semibold uppercase tracking-wide'>CS353</span>

          </div>
      </header>
      <div>
        <h1 className='px-4 text-lg font-bold'>{post.heading}</h1>
        <p className='px-4 py-2 text-sm'>{post.content}</p>
      </div>
      <div>
              <Image src={post.postImage} alt="Post Image" width={600} height={400} className="w-full max-h-96 object-cover"/>
      </div>
      
      <footer>
        <button className=''>
          <Like className='' /><span className=''>{post.likeCount}</span>
        </button>
        <button>
          <Comment/><span className=''>{post.commentCount}</span>
        </button>
      </footer>
    </article>
  )
}
