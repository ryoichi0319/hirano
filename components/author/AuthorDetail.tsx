"use client"

import { Post, User } from "@prisma/client"
import Image from "next/image"
import AuthorPostItem from "@/components/author/AuthorPostItem"

interface AuthorDetailProps {
  user: User & {
    post: Post[]
  }
}

// 投稿者詳細
const AuthorDetail = ({ user, }: AuthorDetailProps) => {
  return (
    <div>
      <div className="flex justify-center mb-5">
        <div className="relative w-28 h-28 flex-shrink-0">
          <Image
            src={user.image || "/default.png"}
            className="rounded-full object-cover"
            alt={user.name || "avatar"}
            fill
          />
        </div>
      </div>
      <div className="space-y-5 break-words whitespace-pre-wrap mb-5">
        <div className="font-bold text-xl text-center">{user.name}</div>
        <div className="leading-relaxed">{user.introduction}</div>
      </div>

      <div className="space-y-5">
        

        {user.post.length === 0 ? (
          <div className="text-center text-sm text-gray-500">
            投稿はありません
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 break-words">
            {user.post.map((post) => (
              <AuthorPostItem key={post.id} post={post} />
            ))}
          </div>
        )}

  
  
      </div>
    </div>
  )
}

export default AuthorDetail