"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import story from "../../public/story.jpg";
import photo from "../../public/photo.png";
import video from "../../public/video.png";
import poll from "../../public/poll.png";
import events from "../../public/events.png";

// Define a Post type
interface Post {
  id: string;
  desc: string;
  img:string;
  createdAt: string;
  updatedAt:string;
  userId:string;
}

const AddPost = () => {
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!desc.trim()) {
      setError("Please enter some content for your post");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desc }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create post");
      }

      const createdPost: Post = data.post;
      
      console.log("Post created successfully:", createdPost);
      setSuccess(true);
      setDesc("");
      
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error:", error);
      setError((error as Error).message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm mt-4">
      <form onSubmit={handleSubmit} className="flex items-center justify-between gap-2">
        <div className="w-20 text-center">
          <Image
            src={story}
            width={80}
            height={80}
            className="ml-2 w-12 h-12 rounded-full object-cover"
            alt="Profile Picture"
            unoptimized
          />
        </div>

        <textarea
          className="mt-4 w-full bg-slate-100 p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          rows={3}
          placeholder="What's on your mind?"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          disabled={loading}
          required
        />

        <div className="flex flex-col gap-2">
          <BsFillEmojiWinkFill
            size={28}
            className="text-yellow-500 cursor-pointer"
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      </form>

      {success && (
        <div className="mt-2 p-2 bg-green-100 text-green-700 rounded-md">
          Post created successfully!
        </div>
      )}
      
      {error && (
        <div className="mt-2 p-2 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="flex items-center justify-center gap-4 mt-4">
        {[
          { icon: photo, label: "Photo" },
          { icon: video, label: "Video" },
          { icon: poll, label: "Poll" },
          { icon: events, label: "Event" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer hover:text-teal-500 transition-colors"
          >
            <Image
              src={item.icon}
              width={28}
              height={28}
              className="rounded-md"
              alt={`${item.label} Icon`}
              unoptimized
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPost;