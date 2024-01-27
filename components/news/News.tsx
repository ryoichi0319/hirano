import { trpc } from "@/trpc/client";
import PostItem from "./PostItem";
import { getAuthSession } from "@/lib/nextauth";
import NewsTitle from "./NewsTitle";

const News = async () => {
  // urlのクエリパラメータからページ番号と1ページあたりの表示件数を取得
  const user = await getAuthSession();
  const posts = await trpc.post.getPosts({});

  // 投稿がない場合
  if (posts.length === 0) {
    return (
      <div id="news" className="  text-gray-500 max-w-5xl mt-14  mx-auto ">
        <h1 className="mb-6 font-thin text-gray-500 text-6xl pt-7">
          <NewsTitle />
        </h1>
        <div className=" text-center ">
        投稿はありません
        </div>
      </div>
    );
  }

  // 投稿がある場合
  return (
    <div id="news" className="  text-gray-500 max-w-5xl mt-14  mx-auto ">
        <h1 className="mb-6 font-thin text-gray-500 text-6xl pt-7">
          <NewsTitle />
        </h1>
        <div className=" mx-auto">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} userId={user?.id} />
        ))}
        </div>
      </div>
      
  );
};

export default News;
