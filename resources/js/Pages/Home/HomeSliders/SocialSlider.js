import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./HomeSliders.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

// imgs
//import Img1 from "../../../assets/images/blogs/1.png";
//import Img2 from "../../../assets/images/blogs/2.png";
//import Img3 from "../../../assets/images/blogs/3.png";
//import Img4 from "../../../assets/images/blogs/4.png";
//import Img5 from "../../../assets/images/blogs/5.png";
//import Img6 from "../../../assets/images/blogs/6.png";
import { ArrowLeft, ArrowRight } from "../../../components/Buttons/Buttons";
import {usePage} from "@inertiajs/inertia-react";

SwiperCore.use([Navigation, Pagination]);

const SocialSlider = () => {
    const { social_slider } = usePage().props;
  //const navigationPrevRef = useRef(null);
    console.log(social_slider)
  //const navigationNextRef = useRef(null);
    const navigationPrevRef = {current:null};
    const navigationNextRef = {current:null};
  const socialData = ['/assets/images/blogs/1.png', '/assets/images/blogs/2.png', '/assets/images/blogs/3.png', '/assets/images/blogs/4.png', '/assets/images/blogs/5.png', '/assets/images/blogs/6.png'];
  return (
    <div className="wrapper">
      <div className="social_slider">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          grabCursor
          loop
          slidesPerView={5}
          style={{ height: "220px" }}
          breakpoints={{
            1300: {
              slidesPerView: 5,
            },
            1000: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            450: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1,
            },
          }}
        >
          {social_slider.map((img, index) => {
            return (
              <SwiperSlide key={index} className="img">
                <img src={ '/' + img.path + '/' + img.title } alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div ref={navigationPrevRef}>
        <ArrowLeft />
      </div>
      <div ref={navigationNextRef}>
        <ArrowRight />
      </div>
    </div>
  );
};

export default SocialSlider;
