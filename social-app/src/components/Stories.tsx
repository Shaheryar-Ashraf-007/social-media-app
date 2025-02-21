import React from "react";
import Image from "next/image";
import story from "../../public/story.jpg";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hidden mt-8">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt="Profile Picture"
          />
          <span className="font-medium">Shery </span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
