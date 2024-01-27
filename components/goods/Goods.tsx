"use client"
import React from 'react'
import Image from 'next/image'
import MotionWrapperWithContainerAndItem from '../framer-motion2'
import  "./goods.css"
import MotionWrapper from '../framer-motion';
import Link from 'next/link'
const Goods = () => {
  return (
    <div className=' h-[600px] mt-20 max-w-5xl mx-auto'>
    <div className=' bg-slate-600  text-white w-full h-[600px] mx-auto '>
<MotionWrapperWithContainerAndItem inView={true} itemVariants={{}}>
<h1 className=' text-6xl font-bold lg:ml-28 lg:pt-10 '>Goods</h1>
</MotionWrapperWithContainerAndItem>


<div className='relative  w-full '>
<MotionWrapper customTransition={{duration:1, delay: 0}} shouldAnimate={true} >

  <div className='   lg:w-[300px] lg:h-[300px] lg:rounded-full bg-rose-400 shadow-red-100 shadow-sm  z-10 absolute lg:top-[-50px] lg:left-[400px] lg:hover:scale-105
  top-[70px] left-[15%] w-[70%]  rounded-md p-3 '>
    <div className='lg:flex lg:justify-center lg:items-center lg:h-36  lg:text-center'>contact</div>
  </div>
  </MotionWrapper>

  <MotionWrapper customTransition={{duration:2, delay:0.7}} shouldAnimate={true} >
<Link href={"mailto:info@hiranorisa.net"}>
  <div className='   lg:w-[300px] lg:h-[300px] lg:rounded-full bg-rose-400 shadow-red-100 shadow-sm z-10 absolute lg:top-[150px] lg:left-[100px] lg:hover:scale-105 
  top-[200px] left-[15%] w-[70%]  rounded-md p-3'>
    <div className='lg:flex lg:justify-center lg:items-center lg:h-36  lg:text-center text-2xl font-bold'>contact</div>
    <p className=' text-center text-slate-100'>手紙、出演依頼、LIVEの依頼</p>
    <p className=' text-center text-slate-100'>その他お問い合わせはこちらから</p>
  </div>
  </Link>
  </MotionWrapper>


  <MotionWrapper customTransition={{duration:3, delay:1.4}} shouldAnimate={true} >
<Link href={"https://thebase.com"}>
  <div className='  lg:w-[300px] lg:h-[300px] lg:rounded-full lg:bg-rose-400 shadow-red-100 shadow-sm z-10 absolute lg:top-[150px] lg:left-[700px] lg:hover:scale-105
  top-[370px] left-[15%] w-[70%] rounded-md p-3 bg-purple-400'>
    <div className='lg:flex lg:justify-center lg:items-center lg:h-36  lg:text-center text-2xl font-bold'>BASE</div>
    <p className=' text-xl text-center text-slate-200'>CDやライブグッズはこちらから</p>
  </div>
  </Link>
  </MotionWrapper>

</div>

    </div>
    </div>
  )
}

export default Goods