import React from 'react'
import imagenUno from '../../img/carrousel-react-1-min.jpg'
import imagenDos from '../../img/electronics-min.jpg'
import imagenTres from '../../img/joyeria-min.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css";
import './Slider.scss'


const Slider = () => {
  return (
    <div>
         <Swiper
     modules={[Navigation, EffectFade]}
     navigation
     speed={1000}
     slidesPerView={1}
     loop
    >
      <SwiperSlide className='swiperSlide' >  <img src={imagenUno} alt=""  className='imgCarrousel'/> </SwiperSlide>
      <SwiperSlide   ><img src={imagenDos} alt="" className='imgCarrousel' /> </SwiperSlide>
      <SwiperSlide > <img src={imagenTres}  alt="" className='imgCarrousel' /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Slider