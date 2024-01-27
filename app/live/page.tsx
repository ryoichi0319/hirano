import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import LiveInfo from "@/components/live/Live"
// ログインページ
const Live =  () => {
  // 認証情報取得
 

  return <LiveInfo />
}

export default Live
