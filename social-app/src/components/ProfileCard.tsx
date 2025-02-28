import React from "react";
import Image from "next/image";
import image7 from "../../public/image7.jpg";
import image8 from "../../public/image8.jpg";

const ProfileCard = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6 mt-8">
        <div className="h-20 relative">
          <Image src={image7} alt="" fill className="rounded-md" />
          <Image
            src={image8}
            alt=""
            width={48}
            height={48}
            className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
          />
        </div>
        <div className="h-20 flex flex-col gap-2 items-center">
          <span className="font-semibold">Edward Gabriel May</span>
          <div className="flex items-center gap-4">
            <div className="flex">
              <Image
                src={image8}
                alt=""
                width={12}
                height={12}
                className="rounded-full object-cover w-3 h-3"
              />

              <Image
                src={image8}
                alt=""
                width={12}
                height={12}
                className="rounded-full object-cover w-3 h-3"
              />

              <Image
                src={image8}
                alt=""
                width={12}
                height={12}
                className="rounded-full object-cover w-3 h-3"
              />
            </div>
            <span className="text-xs text-gray-500">500 Followers</span>
          </div>
          <button className="bg-blue-500 rounded-lg p-2 text-white">My Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
