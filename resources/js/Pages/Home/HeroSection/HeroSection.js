import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
//import SlideImg from "../../../assets/images/home/1.png";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import {
    ArrowLeft,
    ArrowRight,
    MainButton,
} from "../../../components/Buttons/Buttons";
import "./HeroSection.css";

const HeroSection = () => {
    const { sliders } = usePage().props;
    const sharedData = usePage().props.localizations;

    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    console.log(sliders);
    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 12000,
    };

    return (
        <div className="hero_section wrapper">
            <Slider {...settings} className="hero_slider">
                {sliders.map((data, index) => {
                    return (
                        <div key={index}>
                            <div className="slide flex">
                                {data.file !== null ? (
                                    <img
                                        className="slide_img"
                                        src={
                                            "/" +
                                            data.file.path +
                                            "/" +
                                            data.file.title
                                        }
                                        alt=""
                                    />
                                ) : null}
                                <div className="content">
                                    <div className="title35">{data.title}</div>
                                    {renderHTML(data.description)}
                                    <a target="_blank" href={data.youtube_url}>
                                        <MainButton
                                            text={__(
                                                "client.slider_btn",
                                                sharedData
                                            )}
                                        />
                                    </a>
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
