import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './mySwiper.scss';


// import required modules
import { Navigation } from 'swiper/modules';


const MySwiper = () => {

  return (
    <div className="mySwiper">
      <div className="mySwiper__container">
        <Swiper navigation={true} modules={[Navigation]} className="">
          <SwiperSlide>
            <div className="mySwiper__left" style={{backgroundImage: `url("images/swiper.png")`}}></div>
            <div className="mySwiper__right">
              <span className="mySwiper__heading">Special offer</span>
              <span className="mySwiper__title">pichon longueville comtesse de lalande </span>
              <a href="#" className="mySwiper__link">ORDER WINE</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySwiper__left" style={{backgroundImage: `url("images/swiper.png")`}}></div>
            <div className="mySwiper__right">
              <span className="mySwiper__heading">Special offer</span>
              <span className="mySwiper__title">pichon longueville comtesse de lalande </span>
              <a href="#" className="mySwiper__link">ORDER WINE</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySwiper__left" style={{backgroundImage: `url("images/swiper.png")`}}></div>
            <div className="mySwiper__right">
              <span className="mySwiper__heading">Special offer</span>
              <span className="mySwiper__title">pichon longueville comtesse de lalande </span>
              <a href="#" className="mySwiper__link">ORDER WINE</a>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
}

export default MySwiper;