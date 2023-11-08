import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import './slider.css';
import 'swiper/css';

export const Slider = () => {

    const imagenes = [
        {
            id: 1, imgUrl:"https://www.bembos.com.pe/_ipx/q_75,s_1280x400/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1687444321_1280x400-parrillera-nuevo-julio.webp"
        },
        {
            id: 2, imgUrl:"https://www.bembos.com.pe/_ipx/q_75,s_1280x400/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1687457355_1280x400-duo-queso-tocino-julio-nuevo.webp"
        },
        {
            id: 3, imgUrl:"https://www.bembos.com.pe/_ipx/q_75,s_1280x400/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1687457355_1280x400-duo-queso-tocino-julio-nuevo.webp"
        }
        
    ]

  return (
    <div >
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {imagenes.map((image)=>(
    <SwiperSlide>
       <img src={image.imgUrl} alt="" />
    </SwiperSlide>
      ))}
    
  </Swiper>
  </div>
  )
}
