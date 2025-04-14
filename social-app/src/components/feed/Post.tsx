import React, { Suspense } from "react";
import Image from "next/image";
import Comments from './Comments';
import { Post as PostType, User } from "@prisma/client";
import PostIntraction from "./PostIntraction";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType &{user: User} & {likes: [{userId : string}]} & {_count: {likes: number, comments: number}};


const Post = async({post} : {post:FeedPostType}) => {

  const {userId} = await auth()


  return (
    <div>
      <div className="">
        {/* user  */}
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-4">
            <Image
              src={post.user.avatar || "/profile.jpg"}
              width={40}
              height={40}
              className=" w-10 h-10 rounded-full"
              alt="Profile Picture"
            />

            <span className="font-medium">{post.user.name && (post.user.surname) ? post.user.name + " " + post.user.surname : post.user.name}</span>
          </div>

          {userId === post.user.id && <PostInfo postId={post.id} />}
          
        </div>

        {/* desc  */}

        <div className="flex flex-col gap-4">
          {post.img && <div className="w-full min-h-96 relative mt-4">
            <Image
              src={post.img}
              fill
              className="object-cover rounded-md"
              alt="Profile Picture"
            />
          </div>}
          <p className="mb-8">
            {post.desc}
          </p>
        </div>

        <Suspense fallback = "Loading...">
        <PostIntraction postId={post.id} likes={post.likes.map((like => like.userId))} commentNumber={post._count.comments}/>
        </Suspense>
        
      </div>
      <Suspense fallback = "Loading...">
      <Comments postId={post.id} />
      </Suspense>
    </div>
  );
};

export default Post;
