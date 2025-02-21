import React from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import { IoIosMore } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import Comments from "./Comments";

const Post = () => {
  return (
    <div>
      <div className="">
        {/* user  */}
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-4">
            <Image
              src={profile}
              width={40}
              height={40}
              className=" w-10 h-10 rounded-full"
              alt="Profile Picture"
            />

            <span className="font-medium">Ellesa Pary</span>
          </div>
          <div className="cursor-pointer">
            <IoIosMore width={16} height={16} />
          </div>
        </div>

        {/* desc  */}

        <div className="flex flex-col gap-4">
          <div className="w-full min-h-96 relative mt-4">
            <Image
              src={profile}
              fill
              className="object-cover rounded-md"
              alt="Profile Picture"
            />
          </div>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            alias ipsam distinctio ullam exercitationem eius quidem porro
            dolorum consectetur beatae! Aliquid eius eveniet animi sit porro
            cumque officia saepe doloribus? Ea eaque similique dignissimos nulla
            quidem debitis iusto magnam assumenda itaque necessitatibus corrupti
            perferendis nostrum vero quo voluptates, minima incidunt.
          </p>
        </div>

        {/* intraction  */}

        <div className="flex items-center justify-between text-sm my-4">
          <div className="flex gap-8">
            <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
              <BiSolidLike size={24} className="text-blue-500 cursor-pointer" />

              <div className="text-gray-300 ">|</div>
              <div className="text-gray-500">
                123<span className="hidden md:inline"> Likes</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
              <AiFillMessage
                size={24}
                className="text-blue-500 cursor-pointer"
              />

              <div className="text-gray-300 ">|</div>
              <div className="text-gray-500">
                123<span className="hidden md:inline"> Comments</span>
              </div>
            </div>

            <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
              <FaShare size={24} className="text-blue-500 cursor-pointer" />

              <div className="text-gray-300 ">|</div>
              <div className="text-gray-500">
                123<span className="hidden md:inline"> Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
