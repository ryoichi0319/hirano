"use client"
import React from 'react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCube,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-cube'
import 'swiper/css/autoplay'
import './slider.css'
// eslint-disable-next-line import/order
import Image from 'next/image' // next/image をインポート

type SlideItem = {
  id: number
  content: string
  imageUrl: string // 画像のURLを追加
}

type SliderProps = {
  items: SlideItem[]
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const breakpoints = {
    // Define breakpoints for different screen sizes
    640: {
      slidesPerView: 1, // Display one slide on screens with width less than 640px
    },
    768: {
      slidesPerView: 2, // Display two slides on screens with width between 640px and 768px
    },
    1024: {
      slidesPerView: 3, // Display two slides on screens with width greater than 768px
    },
  }
  return (
    <div className=' mt-24 mx-auto '>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCube]}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        autoplay
        navigation
        scrollbar={{ draggable: true }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        grabCursor={true}
        speed={1300}
        className="swiper-container-custom "
        >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide-custom ">
            <div>
              {/* next/image を使用して画像を読み込む */}
              <Image
                src={item.imageUrl}
                alt={item.content}
                sizes="100vw"
                className="object-cover h-96 rounded-md mx-auto"

                width={370} // 画像の幅を適切なサイズに調整
                height={300} // 画像の高さを適切なサイズに調整
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Slider
