import React, { useRef } from "react";
import PagePath from "../../components/SmallComps/PagePath";
import SearchInput from "../../components/SmallComps/SearchInput";
//import Img1 from "../../assets/images/products/1.png";
//import Img2 from "../../assets/images/products/2.png";
//import Img3 from "../../assets/images/products/3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import { ArrowLeft2, ArrowRight2 } from "../../components/Buttons/Buttons";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import "./SpecialOffers.css";
//import Blob from "../../assets/images/other/blob.png";
import Layout from "../../Layouts/Layout";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const SpecialOffers = ({seo}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  //  each product has its own color
  const specialData = [
    {
      link: "/",
      product: "/assets/images/products/1.png",
      price: "15.00",
      color: "#3D6D48",
    },
    {
      link: "/",
      product: "/assets/images/products/2.png",
      price: "23.50",
      color: "#726889",
    },
    {
      link: "/",
      product: "/assets/images/products/3.png",
      price: "8.99",
      color: "#F5DBA5",
    },
  ];
  return (
      <Layout seo={seo}>
          <div className="specialOffers">
              <SearchInput color="#ACD3C1" />
              <div className="wrapper main">
                  <PagePath
                      prev="მთავარი"
                      current="სპეციალური შეთავაზება"
                      color="#949494"
                  />
                  <div className="texts">
                      <div className="title35">სპეციალური შეთავაზების დასახელება</div>
                      <p>
                          შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                          ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
                          მიახლოებული შაბლონი
                      </p>
                  </div>
                  <div className="special_slider">
                      <Swiper
                          modules={[Navigation, Pagination, EffectFade]}
                          effect="fade"
                          pagination={true}
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
                          slidesPerView={1}
                      >
                          {specialData.map((item, index) => {
                              return (
                                  <SwiperSlide key={index}>
                                      <div className="offer_item">
                                          <div className="img">
                                              <img src={item.product} alt="" />
                                          </div>
                                          <Link href={item.link}>
                                              <button style={{ background: item.color }}>
                                                  ფასი: {item.price} ₾
                                              </button>
                                          </Link>
                                      </div>
                                  </SwiperSlide>
                              );
                          })}
                      </Swiper>
                  </div>
                  <div ref={navigationPrevRef}>
                      <ArrowLeft2 />
                  </div>
                  <div ref={navigationNextRef}>
                      <ArrowRight2 />
                  </div>
                  <img className="blob" src="/assets/images/other/blob.png" alt="" />
              </div>
          </div>
      </Layout>
  );
};

export default SpecialOffers;
