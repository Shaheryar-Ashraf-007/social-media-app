"use client";
import { switchFollow } from "@/lib/actions";
import React, { useState } from "react";

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isUserFollowing,
  isUserFollowingSent,
}: {
  currentUserId: string;
  userId: string;
  isUserBlocked: boolean;
  isUserFollowing: boolean;
  isUserFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isUserFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isUserFollowingSent,
    
  })

  const follow = async()=>{
    try {
      await switchFollow(userId);

      setUserState((prev)=>({
        ...prev,
        following: prev.following && false,
        followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false
      }))
    } catch (error) {

      console.log(error)
      
    }
  }
  return (
    <>
      <form action={follow}>
        <button className="w-full rounded-md px-4 py-2 text-white bg-blue-500">
          {userState.following
            ? "Following"
            :userState.followingRequestSent
            ? "Freind Request Sent"
            : isUserFollowingSent
            ? "Friend Request Sent"
            : "follow"}
        </button>
      </form>
      <form action="">
        <button className="w-full rounded-md text-red-500  px-4 py-2 bg-slate-100">
          {userState.blocked ? "Unblock User" : "Block User"}
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
