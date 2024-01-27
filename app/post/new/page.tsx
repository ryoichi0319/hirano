import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import PostNew from "@/components/news/PostNew"

// 新規投稿ページ
const PostNewPage = async () => {
  // 認証情報取得
  const user = await getAuthSession()

  if (!user) {
    redirect("/signup")
  }

  return <PostNew />
}

export default PostNewPage
