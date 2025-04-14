"use client"
import Image from 'next/image'
import React, { startTransition, useOptimistic, useState } from 'react'
import { BiLike } from 'react-icons/bi'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { IoIosMore } from 'react-icons/io'
import { User } from '@prisma/client'
import { useUser } from '@clerk/nextjs'
import { addComment } from '@/lib/actions'

type CommentWithUser = Comment & {
  user: User
}

const CommentList = ({
  comments,
  postId,
}: {
  comments: CommentWithUser[]
  postId: string
}) => {
  const { user } = useUser()

  const [commentState, setCommentState] = useState(comments)
  const [desc, setDesc] = useState("")

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    commentState,
    (state: CommentWithUser[], value: CommentWithUser) => [value, ...state]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !desc.trim()) return

    const tempComment: CommentWithUser = {
      id: Date.now().toString(), // temp ID as string
      desc,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: user.id,
      postId,
      user: {
        id: user.id,
        username: "Sending...",
        avatar: user.imageUrl || "/profile.jpg",
        cover: "",
        description: "",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(),
      },
    }

    startTransition(() => {
        addOptimisticComment(tempComment)
      })


    try {
      const createdComment = await addComment(postId, desc)
      setCommentState((prev) => [createdComment, ...prev])
    } catch (error) {
      console.error("Failed to add comment:", error)
    }

    // Clear input
    setDesc("")
  }

  return (
    <>
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl || "/profile.jpg"}
            alt="coimage"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <form onSubmit={handleSubmit} className="relative flex-1">
            <input
              className="w-full bg-slate-100 pl-10 pr-10 py-2 rounded-md outline-none"
              placeholder="Write a comment..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <BsEmojiSmileFill
              size={20}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-yellow-500 cursor-pointer"
            />
          </form>
        </div>
      )}

      <div className="mt-4">
        {optimisticComments.map((comment) => (
          <div className="flex items-start gap-4 mb-4" key={comment.id}>
            <Image
              src={comment.user.avatar || "/profile.jpg"}
              alt="coimage"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col flex-1">
              <span className="font-medium">
                {comment.user.name}
                {comment.user.surname ? ` ${comment.user.surname}` : ""}
              </span>
              <p className="text-gray-700">{comment.desc}</p>
              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <BiLike size={24} className="text-blue-500 cursor-pointer" />
                <span className="text-gray-300">|</span>
                <span>0 Likes</span>
                <span className="text-blue-500 cursor-pointer">Reply</span>
              </div>
            </div>
            <IoIosMore className="cursor-pointer w-4 h-4 text-gray-600" />
          </div>
        ))}
      </div>
    </>
  )
}

export default CommentList
