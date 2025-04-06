"use client";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineGppGood } from "react-icons/md";
import React, { useOptimistic, useState } from "react";
import { FollowRequest } from "@prisma/client";
import { User } from "@clerk/nextjs/server";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests);

  const acceptRequest = async (requestId: string, userId: string) => {
    removeOptimisticRequests(requestId);
    try {
      await acceptFollowRequest(userId);

      setRequestState((prevRequests) =>
        prevRequests.filter((req) => req.id !== requestId)
      );
      console.log("Request accepted successfully");
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const declineRequest = async (requestId: string, userId: string) => {
    removeOptimisticRequests(requestId);
    try {
      await declineFollowRequest(userId);

      setRequestState((prevRequests) =>
        prevRequests.filter((req) => req.id !== requestId)
      );
      console.log("Request declined successfully");
    } catch (error) {
      console.error("Error declining request:", error);
    }
  };

  const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
    requestState,
    (state, value: string) => state.filter((req) => req.id !== value)
  );

  return (
    <div>
      {optimisticRequests.map((request) => (
        <div key={request.id} className="flex items-center justify-between p-2">
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/image8.jpg"} 
              alt="profile"
              width={40}
              height={40}
              className="rounded-full w-10 h-10 object-cover"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <form action={() => declineRequest(request.id, request.sender.id)}>
              <button>
                <MdOutlineCancel
                  size={24}
                  className="text-gray-300 cursor-pointer"
                />
              </button>
            </form>

            <form action={() => acceptRequest(request.id, request.sender.id)}>
              <button>
                <MdOutlineGppGood
                  size={24}
                  className="bg-blue-500 rounded-full text-white cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
