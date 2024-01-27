"use client"
import Iframe from "react-iframe"

const Youtube = () =>{
    const url = "https://www.youtube.com/embed/xksPaT-dMkU"
    return(
      <div className=" mx-auto max-w-5xl w-[500px] md:w-full ">
      <Iframe 
      url={url} 

      className=" mx-auto aspect-video" 
      width="100%"
      
     />
     </div>
    )
}
export default Youtube




// const Youtube = () =>{
//     const url = "https://www.youtube.com/embed/xksPaT-dMkU"
//     return(
//         <div className="max-w-5xl w-[1024px] mx-auto">
//             <h1 className=" text-3xl font-bold text-center mt-10">Movie</h1>
//             <div className="mt-10 aspect-w-16 aspect-h-9">
//           <iframe width="800" height="600" src={url} className="mx-auto" title="YouTube Video"></iframe>
//         </div>
//       </div>
//     )
// }