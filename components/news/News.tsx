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
      <div id="news" className="text-center text-sm text-gray-500 max-w-5xl mx-auto mt-14 space-y-5 ">
        <h1 className="mb-6 font-bold text-5xl">
          <NewsTitle />
        </h1>
        投稿はありません
      </div>
    );
  }

  // 投稿がある場合
  return (
    <div id="news" className="  max-w-5xl mx-auto mt-32 md:w-full">
      <div className="space-y-5">
        <h1 className="mb-12 font-bold text-5xl pt-16">
          <NewsTitle />
        </h1>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} userId={user?.id} />
        ))}
      </div>
      
    </div>
  );
};

export default News;
