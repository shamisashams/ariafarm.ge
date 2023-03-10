import React, { useState } from "react";
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
    const [readMoreShown, setReadMoreShown] = useState(false);

    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    console.log(sliders);
    var settings = {
        afterChange: () => setReadMoreShown(false),
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 12000,
        adaptiveHeight: true,
    };

    console.log(readMoreShown);

    const toggleBtn = (e) => {
        e.preventDefault();
        setReadMoreShown((prevState) => !prevState);
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
                                    {readMoreShown
                                        ? renderHTML(data.description)
                                        : renderHTML(
                                              data.description.substr(0, 400)
                                          )}
                                    {/* <a target="_blank" href={data.youtube_url}> */}
                                    <a
                                        onClick={toggleBtn}
                                        style={{
                                            display:
                                                data.description.length < 400
                                                    ? "none"
                                                    : "block",
                                        }}
                                    >
                                        <MainButton
                                            text={
                                                !readMoreShown
                                                    ? __(
                                                          "client.slider_btn",
                                                          sharedData
                                                      )
                                                    : __(
                                                          "client.slider_btn_show_less",
                                                          sharedData
                                                      )
                                            }
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
