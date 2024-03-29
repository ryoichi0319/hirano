import { trpc } from "@/trpc/client"
import AuthorDetail from "@/components/author/AuthorDetail"

interface AuthorPageProps {
  params: {
    userId: string
  }
  searchParams: {
    [key: string]: string | undefined
  }
}

// ユーザー投稿詳細ページ
const AuthorDetailPage = async ({ params, searchParams }: AuthorPageProps) => {
  const { userId } = params

  

  // ユーザー投稿詳細取得
  const { user } = await trpc.user.getUserByIdPost({
      userId,
     
  })

  if (!user) {
    return <div className="text-center">ユーザーは存在しません</div>
  }
  return (
    <AuthorDetail user={user}  />
  )
}

export default AuthorDetailPage
