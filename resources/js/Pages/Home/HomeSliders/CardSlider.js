import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./HomeSliders.css";
import { Cow, Goat, Buffalo } from "../../../components/SmallComps/Icons";

SwiperCore.use([EffectCoverflow]);

const CardSlider = ({ cardData, category }) => {
    //console.log(category)
    return (
        <div className="card_slider">
            <Swiper
                grabCursor
                centeredSlides
                effect="coverflow"
                observer
                observeParents
                watchSlidesVisibility
                watchSlidesProgress
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
                    250: {
                        slidesPerView: 2,
                    },
                }}
            >
                {cardData.map((card, index) => {
                    let icon;
                    //console.log(card.icon !== undefined ? card.icon : category)
                    switch (
                        card.icon !== undefined ? card.icon : category[0].slug
                    ) {
                        case "cow":
                            icon = <Cow color={card.color} />;
                            break;
                        case "goat":
                            icon = <Goat color={card.color} />;
                            break;
                        case "buffalo":
                            icon = <Buffalo color={card.color} />;
                            break;
                    }
                    return (
                        <SwiperSlide
                            key={index}
                            className="card"
                            style={{
                                color: card.color,
                                borderColor: card.color,
                            }}
                        >
                            {icon}
                            <p className="cursive">{card.text}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default CardSlider;
