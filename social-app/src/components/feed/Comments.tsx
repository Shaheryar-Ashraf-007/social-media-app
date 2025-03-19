import React from "react";
import Image from "next/image";
import coimage from "../../../public/coimage.jpg";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { BiLike } from "react-icons/bi";

const Comments = () => {
  return (
    <div className="p-4 bg-white rounded-lg mt-4 mb-8 shadow-sm">
      {/* Write Comment */}
      <div className="flex items-center gap-4">
        <Image
          src={coimage}
          alt="coimage"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="relative flex-1">
          <input
            className="w-full bg-slate-100 pl-10 pr-10 py-2 rounded-md outline-none"
            placeholder="Write a comment..."
          />
          <BsEmojiSmileFill
            size={20}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-yellow-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-4">
        {/* Comment */}
        <div className="flex items-start gap-4">
          <Image
            src={coimage}
            alt="coimage"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col flex-1">
            <span className="font-medium">Anjilina</span>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              consequatur maiores. Praesentium dolorem adipisci impedit, dolore
              recusandae ipsam nulla ut! Quidem animi blanditiis placeat natus,
              sequi omnis incidunt laborum laudantium.
            </p>
            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <BiLike size={24} className="text-blue-500 cursor-pointer" />
              <span className="text-gray-300">|</span>
              <span>123 Likes</span>
              <span className="text-blue-500 cursor-pointer">Reply</span>
            </div>
          </div>
          <IoIosMore className="cursor-pointer w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
