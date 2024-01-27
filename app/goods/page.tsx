"use client"
import React from 'react'
import Image from 'next/image';
import { Si1001Tracklists } from "react-icons/si";
import MotionWrapper from '@/components/framer-motion';
import challengtothelimit from "@/public/images/challengetothelimit.jpg"
import Link from 'next/link';

const Goods = () => {
  return (
    <div className=' w-full bg-red-300 h-[500px] mt-24 relative '>
        <div className=' max-w-5xl mx-auto '>
            <div className=' flex gap-4'>

        <h1 className="mb-6 font-thin text-gray-500 text-7xl pt-7  ">
        Goods
        </h1>
           </div>

          
  <div className='flex'>
    <div className=' mx-auto'>
      <MotionWrapper customTransition={{duration:2, delay:0.2}} shouldAnimate={true}>
        <Link href={"https://thebase.com"}>
          <div className=' w-full  mx-auto'>
            <div className=' '>  
              <Si1001Tracklists className="w-72 h-72 mt-10 mr-8 text-red-800 pt-6 mx-auto text-center " />
            </div>
            <p className='text-xl text-center text-slate-200 '>CDやライブグッズはこちらから</p>
          </div>
        </Link>
      </MotionWrapper>
    </div>

  <div className='md:w-[600px] md:h-[480px] md:relative md:overflow-hidden shadow-lg md:ml-auto hidden md:block'>
    <Image
      src={challengtothelimit}
      alt=''
      fill
      className='object-cover'
    />
  </div>
</div>
  

        </div>
       

    </div>
  )
}

export default Goods