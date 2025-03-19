"use client";
import React from "react";

const UserInfoCardInteraction = ({
  currentUserId,
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
  return (
    <>
      <form action="">
        <button className="w-full rounded-md px-4 py-2 text-white bg-blue-500">
          {isUserFollowing
            ? "Following"
            : isUserFollowingSent
            ? "Friend Request Sent"
            : "follow"}
        </button>
      </form>
      <form action="">
        <button className="w-full rounded-md text-red-500  px-4 py-2 bg-slate-100">
          {isUserBlocked ? "Unblock User" : "Block User"}
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
