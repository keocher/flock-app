"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidMessageAdd } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import IconWrapper from "./wrappers/IconWrapper";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  return (
    <>
      <aside className="min-h-screen max-w-2xs bg-gruvgreen p-4 flex flex-col items-center">
        <div>
          <img
            src="/flock-logo.svg"
            alt="Flock Logo"
            width={150}
            height={150}
          />
        </div>

        <div className="justify-center flex flex-col min-h-100 mt-auto">
          <nav className="gap-20 flex flex-col ">
            <Link href="/home">
              <IconWrapper>
                <FaHome className="size-10" />
              </IconWrapper>
            </Link>

            <Link href="/add-post">
              <IconWrapper>
                <BiSolidMessageAdd className="size-10" />
              </IconWrapper>
            </Link>

            <Link href="/modules">
              <IconWrapper>
                <FaBook className="size-10" />
              </IconWrapper>
            </Link>
          </nav>
        </div>

        <div className="items-center mt-auto mb-6">
          <Link href="/profile">
            <Image
              src="/profile-pic.png"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full hover:scale-110 duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
