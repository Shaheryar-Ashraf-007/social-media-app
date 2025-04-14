"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import React, { startTransition, useOptimistic, useState } from "react";
import { User } from "@prisma/client";
import { addStory } from "@/lib/actions";

type StoryWithUser = {
  id: string;
  user: User;
};

const StoryList = ({ stories, userId }: { stories: StoryWithUser[]; userId: string }) => {
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState<any>(null);
  const { user, isLoaded } = useUser();

  const [optimisticStories, addOptimisticStories] = useOptimistic(
    storyList,
    (state, value: StoryWithUser) => [value, ...state]
  );

  if (!user || !isLoaded) return null;

  const add = async () => {
    if (!img?.secure_url) return;

    startTransition(() => {
      addOptimisticStories({
        id: Math.random().toString(),
        img: img.secure_url,
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        userId: userId,
        user: {
          id: userId,
          username: "Sending...",
          avatar: user.imageUrl || "/noAvatar.png",
          cover: "",
          description: "",
          name: "",
          surname: "",
          city: "",
          work: "",
          school: "",
          website: "",
          createdAt: new Date(),
        },
      } as StoryWithUser);
    });

    try {
      const createdStory = await addStory(img.secure_url);
      setStoryList((prev) => [createdStory!, ...prev]);
      setImg(null); // Reset after successful submission
    } catch (error) {
      console.error("Error adding story:", error);
    }
  };

  return (
    <>
      <CldUploadWidget
        uploadPreset="social"
        onSuccess={(result: any) => {
          setImg(result?.info);
          console.log("Image uploaded:", result?.info?.secure_url);
        }}
      >
        {({ open }) => (
          <div className="flex flex-col items-center gap-2 cursor-pointer relative">
            <Image
              src={img?.secure_url || user.imageUrl || "/profile.jpg"}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 object-cover"
              alt="Profile Picture"
              onClick={() => open()}
            />
            {img ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  add();
                }}
              >
                <button
                  type="submit"
                  className="text-xs bg-blue-500 p-1 rounded-md text-white"
                >
                  Send
                </button>
              </form>
            ) : (
              <>
                <span className="font-medium">Add a Story...</span>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-gray-200 pointer-events-none">
                  +
                </div>
              </>
            )}
          </div>
        )}
      </CldUploadWidget>

      {optimisticStories.map((story) => (
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          key={story.id}
        >
          <Image
            src={(story.user as any).avatar || "/profile.jpg"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
            alt="User Story"
          />
          <span className="font-medium">
            {(story.user as any).name || (story.user as any).email}
          </span>
        </div>
      ))}
    </>
  );
};

export default StoryList;
