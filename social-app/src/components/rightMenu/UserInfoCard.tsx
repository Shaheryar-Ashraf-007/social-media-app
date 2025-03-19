import React from 'react'
import Link from 'next/link'
import { FiLink } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { auth, User } from '@clerk/nextjs/server';
import prisma from '@/lib/client';
import UserInfoCardInteraction from './UserInfoCardInteraction';



const UserInfoCard =  async ({user} : {user: User}) => {

  const createdAtDate = new Date(user.createdAt)

  const formattedDate = createdAtDate.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  })

  let isUserBlocked = false
  let isUserFollowing = false
  let isUserFollowingSent = false

  const {userId: currentUserId} = await auth()

  if(currentUserId){
    const blockres = await prisma.block.findFirst({
      where:{
        blockerId: user.id,
        blockedId: currentUserId
      },
    });
    blockres ? isUserBlocked = true : isUserBlocked = false

    const followRes = await prisma.follower.findFirst({
      where:{
        followerId: user.id,
        followingId: currentUserId
      },
    });
    followRes ? isUserFollowing = true : isUserFollowing = false

    const followReqRes = await prisma.followRequest.findFirst({
      where:{
        senderId: user.id,
        receiverId: currentUserId
      },
    });
    followReqRes ? isUserFollowingSent = true : isUserFollowingSent = false
  }

  

  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm mt-8 flex flex-col gap-4'>
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href='/' className='text-blue-500'>See All</Link>
      </div>

      {/* bottom  */}

      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center justify-start gap-2">
        <span className='text-xl text-black font-semibold'>{""}
       {(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
        <span className='text-sm'>{user.username}</span>
        </div>
      </div>

      {user.description &&<p>
        {user.description}
      
        
      </p>}

      {user.city && <div className="flex items-center justify-start gap-2">
      <FaLocationDot size={16} className='text-gray-500'/>
        <span className='text-gray-500'>Living in <b>{user.city}</b></span>
        </div>}

        {user.school &&<div className="flex items-center justify-start gap-2">
        <PiStudentFill size={16} className='text-gray-500'/>
        <span className='text-gray-500'>Went to <b>{user.school}</b>
        </span>
        </div>}

        {user.work && <div className="flex items-center justify-start gap-2">
        <MdWork size={16} className='text-gray-500'/>
        <span className='text-gray-500'>Work at <b>{user.work}</b>
        </span>
        </div>}

        <div className="flex items-center justify-between">
            {user.website && <div className=" flex items-center justify-between gap-2">
        <FiLink size={16} className='text-gray-500' /> 
        <Link href={user.website} className='text-blue-500 text-xs'>{user.website}</Link>
        </div>
}
        

        <div className="text-gray-500 flex items-center justify-between gap-2">
        <FaCalendarDays />
        <span className='text-xs font-medium'> joined {formattedDate}</span>
        </div>
        </div>

        <UserInfoCardInteraction
        userId = {user.id} 
        currentUserId = {currentUserId}
        isUserBlocked = {isUserBlocked}
        isUserFollowing = {isUserFollowing}
        isUserFollowingSent = {isUserFollowingSent}/>

       
      </div>
  )
}

export default UserInfoCard