import { getList } from "@/lib/microcms";
import Image from 'next/image';

export default async function LiveInfo() {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    // <div className="max-w-6xl mt-8 mx-auto overflow-x-auto">
    //   <h1 className="text-3xl font-bold md:text-center mt-5 text-slate-700">Live</h1>
    //   <table className="w-full shadow-lg mt-6  p-10 text-slate-700">
    //     <thead>
    //       <tr className=" text-gray-100">
    //         <th className="p-1 ">
    //             <div className=" w-24"></div>
    //         </th>

    //         <th className="p-1 ">
    //             <div className=" w-24"></div>
    //         </th>
    //         <th className="p-1  text-center">
    //           <div className="bg-rose-500 rounded-xl shadow-lg w-28 p-1">
    //             開催日
    //           </div>
    //         </th>
    //         <th className="p-1  text-center">
    //           <div className="bg-rose-500 rounded-xl shadow-lg p-1 w-28">
    //             スタート
    //           </div>
    //         </th>
    //         <th className="p-1  text-center">
    //           <div className="bg-rose-500 rounded-xl shadow-lg p-1 w-28">
    //             オープン
    //           </div>
    //         </th>
    //         <th className="p-1  text-center">
    //           <div className="bg-rose-500 rounded-xl shadow-lg p-1 w-28">
    //             プライス
    //           </div>
    //         </th>
    //         <th className="p-1  text-center">
    //           <div className="bg-rose-500 rounded-xl shadow-lg p-1 w-28">
    //             場所
    //           </div>
    //         </th>
    //         <th className="p-1  text-center">
    //           <div className="bg-rose-500 rounded-xl shadow-lg p-1 w-28">
    //             備考
    //           </div>
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {contents.map((post) => (
    //         <tr key={post.id} className="border-b text-xl">
    //           <td className="font-bold p-1 w-36 text-center">{post.title}</td>
    //           <td className="p-1 w-36 mx-auto">
    //             <Image src={post.image.url} alt=""  width={100} height={100} className="rounded-md" />
    //           </td>
    //           <td className="p-1  text-center w-28">{post.date}</td>
    //           <td className="p-1  text-center w-28">{post.start}</td>
    //           <td className="p-1  text-center w-28">{post.open}</td>
    //           <td className="p-1  text-center w-28">{post.price.toLocaleString()}円</td>
    //           <td className="p-1  text-center w-28">{post.place}</td>
    //           <td className="p-1  text-center text-xs w-28">{post.textarea}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    
    <div className="max-w-5xl mx-auto mt-8 overflow-auto ">
       <div id="news" className="space-y-5 max-w-5xl mx-auto mt-14 md:w-full">
      <div className="space-y-5">
        <h1 className="mb-6 font-bold text-5xl pt-8">
         LIVE
        </h1>
        
      </div>
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {contents.map((content) => (
        <div key={content.id} className="border p-4 rounded-md">
          <p className="mt-2 text-center text-sm text-gray-500">{content.date}</p>
          <h1 className="text-2xl font-bold my-2">{content.title}</h1>

          <div className='mx-auto md:w-full overflow-hidden rounded-md'>
                  <Image
                    src={content.image.url || "/default.png"}
                    alt=''
                    width={200}
                    height={200}
                    className="object-cover transition-all hover:scale-105 hover:rounded-md mx-auto"
                    />
                </div>
        <div className=""> 
          <div className="flex mt-4 justify-center text-sm text-gray-700">
            <p className="mr-2 ">場所</p>
            <p>{content.place}</p>
          </div>

          <div className="flex mt-2 justify-center text-sm text-gray-700">
            <p className="mr-2">オープン:</p>
            <p>{content.open}</p>
          </div>

          <div className="flex mt-2 justify-center text-sm text-gray-700">
            <p className="mr-2">スタート:</p>
            <p>{content.start}</p>
          </div>

          <div className="mt-2 text-center text-lg text-rose-500 font-semibold">
            {content.price.toLocaleString()}円
          </div>

          <div className="mt-2 text-sm text-gray-700">
            <p>{content.textarea}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
  </div>
  );
}
  