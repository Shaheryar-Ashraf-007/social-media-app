import React from "react";

import prisma from "@/lib/client";
import CommentList from "./CommentList";

const Comments = async({postId} : {postId: string}) => {

  const comments = await prisma .comment.findMany({
    where:{
      postId,
    },

    include:{
      user:true
    }
  })
  return (
    <div className="p-4 bg-white rounded-lg mt-4 mb-8 shadow-sm">
      {/* Write Comment */}

      <CommentList comments = {comments} postId = {postId}/>
      
    </div>
  );
};

export default Comments;
