import React from 'react'
import '../../styles/testimonial.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

import person01 from '../../assets/img/avatar01.png'
import person02 from '../../assets/img/avatar02.png'
import person03 from '../../assets/img/avatar03.jpg'

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">
            <h2 className="section_title">
                Reviews
            </h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <div className="slide_item">
                <div className="slide_img-01">
                    <img src={person01} alt="" />
                </div>

                <h4>Jessica Fernandes</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipiscing.
                    gkgosk kvgkg nvaovv
                </p>
            </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
                <div className="slide_img-02">
                    <img src={person02} alt="" />
                </div>

                <h4>Jessica Fernandes</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipiscing.
                    gkgosk kvgkg nvaovv
                </p>
            </div> 
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide_item">
                    <div className="slide_img-03">
                        <img src={person03} alt="" />
                    </div>

                    <h4>Jessica Fernandes</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipiscing.
                        gkgosk kvgkg nvaovv
                    </p>
                </div> 
        </SwiperSlide>
      </Swiper>
        </div>
      </section>
    </>
  );
}