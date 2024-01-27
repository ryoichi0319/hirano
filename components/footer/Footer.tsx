
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { pink } from '@mui/material/colors';
import Link from 'next/link';

import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-5 '>
      
    <div className=' flex justify-end mr-11 gap-3 '>

      <Link href={"https://www.instagram.com/"}>
      <InstagramIcon sx={{ fontSize: 70 , color:pink[500]}} />
      </Link>
      <Link href={"https://www.youtube.com/"}>
       <YouTubeIcon sx={{fontSize: 70}}/>
       </Link>

    </div>
    <footer className=' '>
           <div className=' text-center text-sm'>
            copyright ©︎ All rights reserved | {""}
            <a 
            href='/'
            target='_blank'
            rel=' noopener noreferrer'
            className=' underline'
            >
              hirano risa
            </a>
          </div>
         </footer>
    </div>
  )
}

export default Footer