import DiscDetail from "@/components/disc/DiscDetail"

interface DiscDetailPageProps {
    params: {
        postId: string
    }
}

const DiscDetailPage =  ({params}: DiscDetailPageProps) =>{
    const {postId} = params
    


    return(
        <div>
            <DiscDetail postId={postId} />
        </div>
    )

}
export default DiscDetailPage