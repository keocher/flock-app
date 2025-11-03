"use client";
import React from 'react'
import { FaHome } from 'react-icons/fa';
import { BiSolidMessageAdd } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import IconWrapper from './wrappers/IconWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Sidebar = () => {
  return (
    <>
    
    <aside className="min-h-screen max-w-2xs bg-flockgreen p-4 flex flex-col items-center">
        <div className='min-h-50'>
            <img
                src="/flock-logo.svg"
                alt="Flock Logo"
                width={150}
                height={150}
        />
        </div>

        <div className='justify-center flex items-center'>
            

            <nav className="gap-15 flex flex-col items-center justify-center">
            <Link href="/home">
                <IconWrapper>
                <FaHome className="size-10" />
              </IconWrapper>
            </Link>

            <Link href="/add-post">
                <IconWrapper >
                <BiSolidMessageAdd className="size-10"  />
                </IconWrapper>
            </Link>

            <Link href="/browse-modules">
                <IconWrapper>
                <FaBook className="size-10" />
                </IconWrapper>
            </Link>

            <Link href="/search">
                <IconWrapper>              
                     <FaSearch className="size-10"  />
                </IconWrapper>
            </Link>
            </nav>
        </div>
        <div className='items-center mt-auto mb-6'>
            <Image
                src="/profile-pic.png"
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full"
            />
        </div>
      
    
    </aside>
    
    </>
  )
   
}

export default Sidebar