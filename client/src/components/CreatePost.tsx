"use client";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [courseCode, setCourseCode] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState("");

  return (
    <div className="flex flex-col  justify-center">
      <p className="text-2xl font-bold">Create Post</p>
      <div className="">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 border border-gruvgreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gruvyellow mt-4"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Content"
          className="w-full p-2 border border-gruvgreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gruvyellow mt-4"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <input
          type="file"
          placeholder="Picture"
          className="w-full p-2 border border-gruvgreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gruvyellow mt-4"
          onChange={(e) => {
            setCourseCode(e.target.value);
          }}
        />
      </div>
      <div className="flex w-full  justify-between items-center">
        <select
          className="pr-2 p-2 border border-gruvgreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gruvyellow mt-4 mr-2"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        >
          <option value="" disabled>
            Select Module
          </option>
          <option value="CS264">CS264 - Web Dev</option>
          <option value="CS210">CS210 - Algorithms</option>
          <option value="CS335">CS335 - Machine Learning</option>
        </select>

        <button className="mt-4 px-4 py-2 bg-gruvgreen text-white rounded-lg hover:bg-gruvyellow transition-colors duration-300 ">
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
