
import React from 'react'
import Hero from '../components/hero/Hero';
import Slider from '@/components/slider/Slider';
import News from '@/components/news/News';
import Goods from './goods/page';
import Link from 'next/link';
import Live from './live/page';

const items = [
  { id: 1, content: 'Slide 1', imageUrl: '/images/challengetothelimit.jpg' },
  { id: 2, content: 'Slide 2', imageUrl: '/images/phoenix.jpg' },
  { id: 3, content: 'Slide 3', imageUrl: '/images/dreamride.jpg' },
  { id: 4, content: 'Slide 4', imageUrl: '/images/power.jpg' },

]

const page = () => {
  return (
    <div>
      <Hero />
      <Slider items={items}/>
      <Goods />

      <News />
      <Live />



    </div>
  )
}

export default page