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
import {Link, usePage} from "@inertiajs/inertia-react";

import Layout from "../../Layouts/Layout";
import { Inertia } from '@inertiajs/inertia'

import {
  BlogBoxSmall,
  smallBoxData,
} from "../../components/BlogObjects/BlogObjects";
import { Questions } from "../../components/Questions/Questions";
import { Form } from "../../components/Form/Form";
import SearchInput from "../../components/SmallComps/SearchInput";
import { Cow, Goat } from "../../components/SmallComps/Icons";

const Home = ({seo, page}) => {
    const { cards, blogs, special } = usePage().props;
    const sharedData = usePage().props.localizations;
  let green = "#86AAA8";
  let pink = "#EDC6E7";
  const checks = [
      __('client.section2_check1',sharedData),
      __('client.section2_check2',sharedData),
      __('client.section2_check3',sharedData),
  ];
  console.log(page.sections);
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

  function handleClick(e){
      let email = document.getElementById('s_email').value;
      //alert(email)
        Inertia.post(route('client.subscribe.subscribe'),{ email: email })

  }

    const { errors } = usePage().props

console.log(errors);

  return (
      <Layout seo={seo}>
        <div className="homePage">
          <SearchInput color="#ACD3C1" />
          <HeroSection />
          <div className="why_our_product">
            <img className="abs_img" src="/assets/images/home/2.png" alt="" />
            <div className="wrapper cards">
              <CardSlider cardData={cards} />
            </div>
            <div className="wrapper">
              <div className="left_content">
                <div className="title35">{__('client.home_section1_header',sharedData)}</div>
                <p className="op05">
                    {__('client.home_section1_text',sharedData)}
                </p>
                <div className="subscribe">
                  <div>{__('client.section1_header2',sharedData)}</div>
                  <input name="email" id="s_email" className="bpg" type="text" placeholder={__('client.home_enter_email_placeholder',sharedData)} />
                    {errors.email && <div className="error">{errors.email}</div>}
                  <MainButton text={__('client.subscribe_btn',sharedData)} onClick={handleClick} />
                </div>
              </div>
              <div className="social_media">
                <div className="title35">{__('client.home_section_social_header',sharedData)}</div>
                <p>
                    {__('client.section_social_text',sharedData)}
                </p>
                <SocialLinks />
                <SocialSlider />
              </div>
            </div>
          </div>
            {special ? <div className="white wrapper flex centered">
            <img src={special.latest_image != null
                ? "/" +
                special.latest_image.path +
                "/" +
                special.latest_image.title
                : null} alt="" />
            <div className="content">
              <span>{__('client.home_section_special_header',sharedData)}</span>
              <div className="title35 green">{special.title}</div>
              <p className="op05">
                  {special.short_description}
              </p>
              <span
                style={{
                  textDecoration: "line-through",
                  margin: "18px 0",
                  display: "block",
                }}
              >
                {parseFloat(special.price).toFixed(2)}₾
              </span>
              <Link href={route('client.special-offer.index')}>
                <MainButton text={__('client.home_btn_special_txt',sharedData)} />
              </Link>
            </div>
          </div> : null}
          <div className="our_products">
            <div className="wrapper flex">
              <div className="content">
                <span>{__('client.section2_title',sharedData)}</span>
                <div className="title35 green">{__('client.home_section2_title2',sharedData)}</div>
                <p className="op05">
                    {__('client.section2_text',sharedData)}
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
                <Link href={route('client.farm.index')}>
                  <MainButton text={__('client.home_learn_more_btn',sharedData)} />
                </Link>
              </div>
              <div className="img">
                <img src={page.sections[0].file !== null ? "/" +
                    page.sections[0].file.path +
                    "/" +
                    page.sections[0].file.title
                    : null} alt="" />
              </div>
            </div>
          </div>
          <div className="blog_section wrapper">
            <div className="flex">
              <div className="title35 green">{__('client.blog',sharedData)}</div>
              <Link href={route('client.blog.index')}>{__('client.home_view_all',sharedData)}</Link>
            </div>
            <div className="grid boxes">
              {/* no more than 4 boxes should be allowed in this section */}
              {blogs.map((data, index) => {
                return (
                  <BlogBoxSmall
                    key={index}
                    link={route('client.blog.show',data.slug)}
                    img={data.latest_image != null
                        ? "/" +
                        data.latest_image.path +
                        "/" +
                        data.latest_image.title
                        : null}
                    title={data.title}
                    date={data.created_at}
                    paragraph={data.short_description}
                  />
                );
              })}
            </div>
          </div>
          <div className="faq wrapper">
            <div className="title35">{__('client.home_faq',sharedData)}</div>
            <Questions />
          </div>
          <div className="lastsec form_section wrapper flex">
            <div className="img-holder">
              <div className="img">
                <img src={page.sections[1].file !== null ? "/" +
                    page.sections[1].file.path +
                    "/" +
                    page.sections[1].file.title
                    : null} alt="" />
              </div>
            </div>
            <Form />
          </div>
        </div>
      </Layout>
  );
};

export default Home;
