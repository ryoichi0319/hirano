'use client';
import Image from 'next/image';
import hirano from "@/public/images/hirano.jpg"
import MotionWrapperWithContainerAndItem from '../framer-motion2';
import "./hero.css"

export default function Hero() {
  return (
    <div className='relative'>

      <MotionWrapperWithContainerAndItem inView={true} itemVariants={{}}>
        <div className='text-4xl md:text-7xl absolute inset-8 z-10 font-serif font-bold text-slate-600'>
          HIRANO
        </div>
        <div className='text-4xl md:text-7xl absolute top-32 left-5 md:left-20 z-10 font-serif font-bold text-pink-500'>
          RISA
        </div>
      </MotionWrapperWithContainerAndItem>

      <div className='img-wrap justify-end w-full  mx-auto mt-10 md:ml-[480px] '>
        <Image
          src={hirano}
          alt=""
          width={900}
          height={900}
          className='object-cover md:h-[800px]'
          priority
        />
      </div>
    </div>
  );
}
