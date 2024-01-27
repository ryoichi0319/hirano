import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import LiveInfo from "@/components/live/Live"
// ログインページ
const Live = async () => {
  // 認証情報取得
  const user = await getAuthSession()

  if (user) {
    redirect("/")
  }

  return (
    <div><LiveInfo /></div>
  )
}

export default Live
