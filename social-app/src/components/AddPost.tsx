"use client";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import AddPostButton from "../components/rightMenu/AddPostButton";
import { addPost } from "@/lib/actions";
import { BsEmojiWinkFill } from "react-icons/bs";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  if (!isLoaded) return "Loading...";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!desc.trim()) return;

    try {
      await addPost(desc, imgUrl || "");
      setDesc("");
      setImgUrl(null);
    } catch (error) {
      console.error("Failed to post:", error);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user?.imageUrl || "/profile.jpg"}
        alt="Profile"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/* POST FORM */}
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <div className="flex flex-col justify-between">
            <BsEmojiWinkFill className="text-2xl text-yellow-400 cursor-pointer" />
            <AddPostButton />
          </div>
        </form>

        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result: any) => {
              setImgUrl(result?.info?.secure_url);
              console.log("Image uploaded:", result?.info?.secure_url);
            }}
          >
            {({ open }) => (
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
                onClick={() => open?.()}
              >
                <Image src="/photo.png" alt="Upload" width={20} height={20} />
                Photo
              </div>
            )}
          </CldUploadWidget>

          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <Image src="/video.png" alt="" width={20} height={20} />
            Video
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <Image src="/events.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>

        {/* Preview Uploaded Image */}
        {imgUrl && (
          <div className="mt-4">
            <p className="text-xs text-gray-500">Image Preview:</p>
            <Image
              src={imgUrl}
              alt="Uploaded preview"
              width={300}
              height={200}
              className="rounded-md mt-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPost;
