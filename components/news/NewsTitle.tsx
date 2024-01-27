"use client"
import React from 'react'
import MotionWrapper from '../framer-motion';
const NewsTitle = () => {
    const words = "NEWS"
    const word = words.split("")
    
  return (
    <div>
      {word.map((w,i) =>(
        <div key={i} className=' inline-block' >
         <MotionWrapper customTransition={{duration:3,  delay: i * 0.2 }} shouldAnimate={true}>
          <div>{w}</div>
         </MotionWrapper>
         </div>
      ))
}
<div>
  </div>

    </div>
  )
}

export default NewsTitle