import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
//import SlideImg from "../../../assets/images/home/1.png";
//import { Link } from "react-router-dom";
import {Link, usePage} from "@inertiajs/inertia-react";
import {
  ArrowLeft,
  ArrowRight,
  MainButton,
} from "../../../components/Buttons/Buttons";
import "./HeroSection.css";

const HeroSection = () => {
    const { sliders } = usePage().props;
    const sharedData = usePage().props.localizations;
    //console.log(sliders)
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const slidesData = [
    {
      img: 'assets/images/home/1.png',
      title: "თანამედროვე ტექნოლოგიებით აღჭურვილი ქართული საწარმო",
      paragraph:
        "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა ",
      btnLink: "/",
    },
    {
      img: 'assets/images/home/1.png',
      title: "თანამედროვე ტექნოლოგიწარმო ნოლოგიებისა",
      paragraph:
        "არია ქართული ბრენდია. აღნიშნული საწარმო სამეთ აღჭუებისარვილი ქართული გრელოში, სენაკის რაიონის სოფელ მენჯშაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა",
      btnLink: "/",
    },
  ];
  return (
    <div className="hero_section wrapper">
      <Slider {...settings} className="hero_slider">
        {sliders.map((data, index) => {
          return (
            <div key={index}>
              <div className="slide flex">
                <img className="slide_img" src={"/" + data.file.path + "/" + data.file.title} alt="" />
                <div className="content">
                  <div className="title35">{data.title}</div>
                  <p>{data.description}</p>
                  <Link href={data.youtube_url}>
                    <MainButton text={__('client.slider_btn',sharedData)} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <ArrowLeft />
      <ArrowRight />
    </div>
  );
};

export default HeroSection;
