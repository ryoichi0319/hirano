import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import Disc from "@/components/disc/Disc"
// ログインページ
const Discography = async () => {
  // 認証情報取得
  const user = await getAuthSession()

  if (user) {
    redirect("/")
  }

  return(
    <div className="  ">
      <Disc />
    </div>
  ) 
}

export default Discography