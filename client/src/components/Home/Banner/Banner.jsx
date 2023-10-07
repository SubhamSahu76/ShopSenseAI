import React, { useRef, useState } from "react";
import "./Banner.scss";
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>SOUND THE MOST!!</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <Swiper className="banner-img"
                loop={true}
                modules={[Autoplay, A11y]}
                // spaceBetween={0}
                slidesPerView={1}
                slidesPerGroup={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src={"/assets/products/white.png"} className="slide" alt="" /></SwiperSlide>
                <SwiperSlide><img src={"/assets/products/headphone-prod-3.webp"} className="slide" alt="" /></SwiperSlide>
                <SwiperSlide><img src={"/assets/products/speaker-prod-3.webp"} className="slide" alt="" /></SwiperSlide>
                <SwiperSlide><img src={"/assets/products/earbuds-prod-2.webp"} className="slide" alt="" /></SwiperSlide>
                <SwiperSlide><img src={"/assets/products/watch-prod-1.webp"} className="slide" alt="" /></SwiperSlide>
            </Swiper>

        </div>
    </div>
};

export default Banner;
