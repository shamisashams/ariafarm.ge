import React from "react";
import { MainButton } from "../../components/Buttons/Buttons";
import HeroSection from "./HeroSection/HeroSection";
import "./Home.css";
//import milkBottle from "../../assets/images/home/2.png";
import CardSlider from "./HomeSliders/CardSlider";
import { SocialLinks } from "../../components/SmallComps/SocialLinks";
import SocialSlider from "./HomeSliders/SocialSlider";
//import Img1 from "../../assets/images/home/3.png";
//import Img2 from "../../assets/images/home/4.png";
//import Img3 from "../../assets/images/home/5.png";
//import Check from "../../assets/images/icons/check.svg";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";

import Layout from "../../Layouts/Layout";

import {
  BlogBoxSmall,
  smallBoxData,
} from "../../components/BlogObjects/BlogObjects";
import { Questions } from "../../components/Questions/Questions";
import { Form } from "../../components/Form/Form";
import SearchInput from "../../components/SmallComps/SearchInput";
import { Cow, Goat } from "../../components/SmallComps/Icons";

const Home = ({seo}) => {
  let green = "#86AAA8";
  let pink = "#EDC6E7";
  const checks = [
    "100% ნატურალური",
    "ეკოლოგიურად სუფთა ბიო პროდუქტი",
    "საქართველოში წარმოებული უმაღლესი ხარისხი",
  ];
  const cardData = [
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: green,
      icon: <Cow color={green} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: pink,
      icon: <Goat color={pink} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: green,
      icon: <Cow color={green} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა გაო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: pink,
      icon: <Goat color={pink} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნნლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: green,
      icon: <Cow color={green} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: pink,
      icon: <Goat color={pink} />,
    },
  ];
  return (
      <Layout seo={seo}>
        <div className="homePage">
          <SearchInput color="#ACD3C1" />
          <HeroSection />
          <div className="why_our_product">
            <img className="abs_img" src="/assets/images/home/2.png" alt="" />
            <div className="wrapper cards">
              <CardSlider cardData={cardData} />
            </div>
            <div className="wrapper">
              <div className="left_content">
                <div className="title35">რატომ ჩვენი პროდუქტი?</div>
                <p className="op05">
                  არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის
                  რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა ყველა
                  საერთაშორისო სტანდარტის დაცვით აშენდა, რაც ჯანსაღი და სასარგებლო
                  პროდუქციის წარმოების გარანტია.
                </p>
                <div className="subscribe">
                  <div>გამოიწერე სიახლეები და იყავი მუდამ ინფორმირებული</div>
                  <input className="bpg" type="text" placeholder="შეიყვანე მეილი" />
                  <MainButton text="გამოწერა" />
                </div>
              </div>
              <div className="social_media">
                <div className="title35">გვიპოვე სოციალურ ქსელებში</div>
                <p>
                  არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის
                  რაიონის
                </p>
                <SocialLinks />
                <SocialSlider />
              </div>
            </div>
          </div>
          <div className="white wrapper flex centered">
            <img src="/assets/images/home/3.png" alt="" />
            <div className="content">
              <span>სპეციალური შეთავაზება</span>
              <div className="title35 green">თხის ყველი</div>
              <p className="op05">
                არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის
                სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა ყველა
                საერთაშორისო
              </p>
              <span
                style={{
                  textDecoration: "line-through",
                  margin: "18px 0",
                  display: "block",
                }}
              >
                22₾
              </span>
              <Link href={route('client.special-offer.index')}>
                <MainButton text="დეტალურად" />
              </Link>
            </div>
          </div>
          <div className="our_products">
            <div className="wrapper flex">
              <div className="content">
                <span>ჩვენი პროდუქცია</span>
                <div className="title35 green">ვქმნით საუკეთსო ხარისხს</div>
                <p className="op05">
                  არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის
                  რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა ყველა
                  საერთაშორისო სტანდარტის დაცვით აშენდა, რაც ჯანსაღი და სასარგებლო
                  პროდუქციის წარმოების
                </p>
                <ul>
                  {checks.map((item, index) => {
                    return (
                      <li key={index}>
                        <img src="/assets/images/icons/check.svg" alt="" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <Link href="/">
                  <MainButton text="გაიგე მეტი" />
                </Link>
              </div>
              <div className="img">
                <img src="/assets/images/home/4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="blog_section wrapper">
            <div className="flex">
              <div className="title35 green">ბლოგი</div>
              <Link href="/">ნახე სრულად</Link>
            </div>
            <div className="grid boxes">
              {/* no more than 4 boxes should be allowed in this section */}
              {smallBoxData.map((data, index) => {
                return (
                  <BlogBoxSmall
                    key={index}
                    link={route('client.blog.show','blog')}
                    img={data.img}
                    title={data.title}
                    date={data.date}
                    paragraph={data.paragraph}
                  />
                );
              })}
            </div>
          </div>
          <div className="faq wrapper">
            <div className="title35">ხშირად დასმული კითხვები</div>
            <Questions />
          </div>
          <div className="lastsec form_section wrapper flex">
            <div className="img-holder">
              <div className="img">
                <img src="/assets/images/home/5.png" alt="" />
              </div>
            </div>
            <Form />
          </div>
        </div>
      </Layout>
  );
};

export default Home;
