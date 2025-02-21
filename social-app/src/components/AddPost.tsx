import React from "react";
import Image from "next/image";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import story from "../../public/story.jpg";
import photo from "../../public/photo.png";
import video from "../../public/video.png";
import poll from "../../public/poll.png";
import events from "../../public/events.png";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm mt-4">
      <div className="flex items-center justify-between gap-2 ">
        <div className="w-20 text-center gap-3">
          <Image
            src={story}
            width={80}
            height={80}
            className=" ml-2 w-12 h-12 rounded-full"
            alt="Profile Picture"
          />
        </div>
        <textarea
          className="mt-4 w-full bg-slate-100 p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          rows="3"
          placeholder="What's on your mind?"
        />

        <BsFillEmojiWinkFill
          size={28}
          className="text-yellow-500 cursor-pointer mt-16"
        />
      </div>
      <div className="flex items-center justify-center gap-2 mt-4 ">
        <Image
          src={photo}
          width={28}
          height={28}
          className="rounded-md align-middle"
          alt="Profile Picture"
        />
        <span>Photos</span>

        <Image
          src={video}
          width={28}
          height={28}
          className="rounded-md align-middle"
          alt="Profile Picture"
        />
        <span>Videos</span>

        <Image
          src={poll}
          width={28}
          height={28}
          className="rounded-md align-middle"
          alt="Profile Picture"
        />
        <span>Poll</span>
        <Image
          src={events}
          width={28}
          height={28}
          className="rounded-md align-middle"
          alt="Profile Picture"
        />
        <span>Events</span>
      </div>
    </div>
  );
};

export default AddPost;
