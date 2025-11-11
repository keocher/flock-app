import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full items-center flex flex-col justify-center">
      <Image
        src="/profile-pic.png"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mb-4"
      />

      <h1 className="text-3xl font-bold mt-5">User</h1>
      <p className="text-gruvgreen mt-2">user@email.com</p>
      <button className="rounded-md bg-gruvred px-4 py-2 border-1 border-gruvfg mt-6 hover:bg-gruvgray hover:text-gruvred transition duration-300">
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
