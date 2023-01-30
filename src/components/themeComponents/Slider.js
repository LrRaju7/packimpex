import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ComponentDecider from "./ComponentDecider"
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import "../../assets/theme/packimpex/css/ext-component-swiper.css"

export default function Slider(props) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={35}
      modules={[Navigation]}
      className="swiper-responsive-breakpoints swiper-container px-4 py-2"
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        1600: {
          slidesPerView: 4,
          spaceBetween: 35
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 35
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 35
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 35
        }
      }}
    >
      {
        props?.items?.length ? props.items.map((item) => {
          return <SwiperSlide key={item.id}><ComponentDecider items={[item]}></ComponentDecider></SwiperSlide>
        }) : null
      }
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  )
}
