import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import Disc from "@/components/disc/Disc"
// ログインページ
const Discography =  () => {



  return(
    <div className="  ">
      <Disc />
    </div>
  ) 
}

export default Discography