import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./HomeSliders.css";

SwiperCore.use([EffectCoverflow]);

const CardSlider = ({ cardData }) => {
  return (
    <div className="card_slider">
      <Swiper
        grabCursor
        centeredSlides
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        loop
        slidesPerView={3}
        style={{ height: "400px" }}
        breakpoints={{
          700: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
          250: {
            slidesPerView: 1,
          },
        }}
      >
        {cardData.map((card, index) => {
          return (
            <SwiperSlide
              key={index}
              className="card"
              style={{
                color: card.color,
                borderColor: card.color,
              }}
            >
              {card.icon}
              <p className="cursive">{card.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSlider;
