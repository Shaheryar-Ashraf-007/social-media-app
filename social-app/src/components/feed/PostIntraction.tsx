"use client"

import { useUser } from '@clerk/nextjs'
import React, { useOptimistic, useState } from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { FaShare } from 'react-icons/fa'
import Image from 'next/image'
import { switchLike } from '@/lib/actions'

const PostInteraction = ({
  postId,
  likes,
  commentNumber,
}: {
  postId: string
  likes: string[]
  commentNumber: number
}) => {
  const { isLoaded, userId } = useUser()

  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  })

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }
    }
  )

  const likeAction = async () => {
    switchOptimisticLike('')

    try {
      await switchLike(postId)
      setLikeState((state) => ({
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex gap-8">
        {/* Likes */}
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <form action={likeAction}>
            <button type="submit">
              <div className= {`p-1 rounded-full transition-all ${
    optimisticLike.isLiked ? 'text-blue-100' : 'bg-transparent'
  }`}>
              <Image
                src="/like.png"
                alt="like"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              </div>
            </button>
          </form>

          <div className="text-gray-300">|</div>
          <div className="text-gray-500">
            {optimisticLike.likeCount}
            <span className="hidden md:inline"> Likes</span>
          </div>
        </div>

        {/* Comments */}
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <AiFillMessage size={24} className="text-blue-500 cursor-pointer" />
          <div className="text-gray-300">|</div>
          <div className="text-gray-500">
            {commentNumber}
            <span className="hidden md:inline"> Comments</span>
          </div>
        </div>

        {/* Share */}
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <FaShare size={24} className="text-blue-500 cursor-pointer" />
          <div className="text-gray-300">|</div>
          <div className="text-gray-500">
            <span className="hidden md:inline"> Share</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostInteraction
