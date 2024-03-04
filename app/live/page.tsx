import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import LiveInfo from "@/components/live/Live"
// ログインページ
const Live =  () => {
 

  return <LiveInfo />
}

export default Live
