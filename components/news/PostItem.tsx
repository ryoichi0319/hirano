"use client"
import { Post, User } from "@prisma/client";
import { formatDistance } from "date-fns";
import { ja } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

interface PostItemProps {
  post: Post & {
    user: Pick<User, "id" | "name" | "image">;
  };
  userId?: string;
}

// 投稿一覧のアイテム
const PostItem = ({ post, userId }: PostItemProps) => {
  // 投稿内容を60文字に制限
  const content =
    post.content.length > 60 ? post.content.slice(0, 60) + "..." : post.content;

  // 日付
  const updatedAt = new Date(post.updatedAt ?? 0);
  const now = new Date();
  const date = formatDistance(updatedAt, now, { addSuffix: true, locale: ja });
  const formattedDate = post.createdAt.toLocaleDateString();

  return (
    <div className="  ">
      

    <div className="p-4  border-b-2 flex">
      <div className=" w-32 ml-14">
        <div className="font-bold text-lg hover:underline">
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </div>
      </div>
      <div className="flex-grow "> {/* 真ん中の要素 */}
        <div className="hover:underline">
          <Link href={`/post/${post.id}`}>{content}</Link>

        </div>
        
      </div>
      <div className=" w-32 ">
        <div>{formattedDate}</div>
      </div>
    </div>


  </div>
  
  
  
  );
};

export default PostItem;
