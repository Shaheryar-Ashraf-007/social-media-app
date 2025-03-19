"use server"
import React from "react";
import Image from "next/image";
import image8 from "../../../public/image8.jpg";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

const ProfileCard =async() => {

  const {userId} = await auth()

  if (!userId) {
    return null
  }

  const user = await prisma.user.findFirst({

    where: {
      id: userId
    },
    include:{
      _count:{
        select:{
          followers:true
        }
      }
    }
  })
  console.log(user)

  if (!user) return null
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6 mt-8">
        <div className="h-20 relative">
          <Image src={user.cover || "/image7.jpg"} alt="" fill className="rounded-md" />
          <Image
            src={user.avatar || "/image8.jpg"}
            alt=""
            width={48}
            height={48}
            className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
          />
        </div>
        <div className="h-20 flex flex-col gap-2 items-center">
          <span className="font-semibold">{(user.name && user.surname) ? user.name + " " + user.surname : user.name}</span>
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
            <span className="text-xs text-gray-500">{user._count.followers}</span>
          </div>
          <button className="bg-blue-500 rounded-lg p-2 text-white">My Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
