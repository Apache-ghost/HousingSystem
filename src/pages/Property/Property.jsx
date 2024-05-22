import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'; 
import "swiper/css";
import 'swiper/css/navigation';
import  './Property.css';
import { sliderSettings } from '../../utils/common';
import data from "../../utils/slider.json"

const Property = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Properties</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home"/>
                  <span>
                    <span style={{color: "orange"}}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Property

const SliderButtons = () => {
  return (
    <div className="r-button">
      <button onClick={()=> Swiper.slidePrev} >&lt;</button>
      <button onClick={()=> Swiper.slideNext}>&gt;</button>
    </div>
  );
};