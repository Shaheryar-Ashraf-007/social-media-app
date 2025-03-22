"use client";
import { switchBlock, switchFollow } from "@/lib/actions";
import React, { useOptimistic, useState } from "react";

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

    switchOptimisticState("follow");
    try {
      await switchFollow(userId);

      setUserState((prev)=>({
        ...prev,
        following: prev.following && false,
        followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false
      }))
    } catch (error) {
 console.log(error)
      
    }}

    const block = async()=>{

      switchOptimisticState("block");
      try {
        await switchBlock(userId);
  
        setUserState((prev)=>({
          ...prev,
          blocked: !prev.blocked
        }))
        
      } catch (error) {

        console.log(error)
        
      }

    }

    const [optimisticState, switchOptimisticState] = useOptimistic(
      userState,
      (state, value: "follow" | "block") => 
          value === "follow" 
              ? {
                  ...state,
                  following: false,
                  followingRequestSent: !state.following && !state.followingRequestSent,
                } 
              : {
                  ...state,
                  blocked: !state.blocked,
                }
  );
  
  return (
    <>
      <form action={follow}>
        <button className="w-full rounded-md px-4 py-2 text-white bg-blue-500">
          {optimisticState.following
            ? "Following"
            :optimisticState.followingRequestSent
            ? "Freind Request Sent"
            : isUserFollowingSent
            ? "Friend Request Sent"
            : "follow"}
        </button>
      </form>
      <form action={block}>
        <button className="w-full rounded-md text-red-500  px-4 py-2 bg-slate-100">
          {userState.blocked ? "Unblock User" : "Block User"}
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
