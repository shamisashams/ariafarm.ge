import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import SearchInput from "../../components/SmallComps/SearchInput";
//import Arrow from "../../assets/images/icons/long-arrow-alt-left.svg";
//import Img1 from "../../assets/images/products/1.png";
//import Img2 from "../../assets/images/products/2.png";
//import Img3 from "../../assets/images/products/3.png";
//import Img4 from "../../assets/images/home/5.png";
//import Img5 from "../../assets/images/other/1.png";
import "./SingleProduct.css";
import { ArrowLeft, ArrowRight } from "../../components/Buttons/Buttons";
import CardSlider from "../Home/HomeSliders/CardSlider";
import FermaSection from "../../components/FermaSection/FermaSection";
import { Cow, Goat } from "../../components/SmallComps/Icons";

import Layout from "../../Layouts/Layout";

const SingleProduct = ({seo}) => {
  // productColor varies for each product
  let productColor = "#155228";
  const [showImg, setShowImg] = useState(0);
  const images = ["/assets/images/products/1.png", "/assets/images/products/2.png", "/assets/images/products/3.png"];
  const cardData = [
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: productColor,
      icon: <Cow color={productColor} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: productColor,
      icon: <Goat color={productColor} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: productColor,
      icon: <Cow color={productColor} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა გაო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: productColor,
      icon: <Goat color={productColor} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნნლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: productColor,
      icon: <Cow color={productColor} />,
    },
    {
      text: "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეა განლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა.",
      color: productColor,
      icon: <Goat color={productColor} />,
    },
  ];
  return (
      <Layout seo={seo}>
        <div className="singleProduct">
      <SearchInput color="#ACD3C1" />
      <div className="wrapper showcase">
        <Link href={route('client.product.index')} className="back" style={{ color: "#939393" }}>
          <img src="/assets/images/icons/long-arrow-alt-left.svg" alt="" /> პროდუქციაში დაბრუნება
        </Link>
        <div className="flex main">
          {/* this goes to the previous product page */}
          <Link href="/">
            <ArrowLeft />
          </Link>
          {/* this goes to the next product page */}
          <Link href="/">
            <ArrowRight />
          </Link>
          <div className="images">
            {images.map((img, index) => {
              return (
                <div
                  key={index}
                  className={showImg === index ? "img large show" : "img large"}
                >
                  <img src={img} alt="" />
                </div>
              );
            })}
            <div className="flex centered">
              {images.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="img"
                    onClick={() => setShowImg(index)}
                  >
                    <img src={img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="details">
            <div className="title50 gradient-bg rtl h100">მოცარელა</div>
            <div className="green">პროდუქტის შესახებ</div>
            <p className="op05">
              შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
              ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
              მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა,
              როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება
              ტექსტის ბლოკი. სწორედ ასეთ
            </p>
            <div className="green">შემადგენლობა</div>
            <p className="op05">
              შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
              ტიპოგრაფიული ნაწარმის შემქმნელებს,
            </p>
            <div className="green">რეკომენდაცია</div>
            <p className="op05">
              შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
              ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
              მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა,
              როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება
              ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით
              შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“
              ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას
              ქმნის და არაბუნებრივად გამოიყურება.
            </p>
          </div>
        </div>
      </div>
      <div className="cards_sec">
        <div className="wrapper">
          <div className="text">
            <div className="title35">
              ფაქტები და <br />
              კომენტარები
            </div>
            <p>
              შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
              ტიპოგრაფიული ნაწარმის შემქმნელებს.
            </p>
          </div>
          <CardSlider cardData={cardData} />
        </div>
      </div>
      <div className="recipe wrapper2 flex">
        <div className="img">
          <img src="/assets/images/home/5.png" alt="" />
        </div>
        <div className="context">
          <div className="title50 gradient-bg rtl h100">რეცეპტი</div>
          <p className="op05">
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
            მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა,
            როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის
            ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი
            ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა
            გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და
            არაბუნებრივად გამოიყურება.
            <br /> <br />
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
            მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა,
            როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის
            ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი
            ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა
            გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და
            არაბუნებრივად გამოიყურება.
            <br /> <br />
            ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით
            შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“
            ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას
            ქმნის და არაბუნებრივად გამოიყურება.
          </p>
          <Link to="/" className="fb flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.176"
              height="19"
              viewBox="0 0 10.176 19"
            >
              <path
                id="Icon_awesome-facebook-f"
                data-name="Icon awesome-facebook-f"
                d="M11.119,10.688l.528-3.439h-3.3V5.018A1.719,1.719,0,0,1,10.286,3.16h1.5V.232A18.292,18.292,0,0,0,9.123,0C6.406,0,4.63,1.647,4.63,4.628V7.249H1.609v3.439H4.63V19H8.347V10.688Z"
                transform="translate(-1.609)"
                fill="#1e69ff"
              />
            </svg>
            <span>გააზიარე</span>
          </Link>
        </div>
      </div>
      <FermaSection
        imgSrc="/assets/images/other/1.png"
        link="/"
        title="ჩვენი ფერმა"
        paragraph="შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს,"
      />
    </div>
      </Layout>
  );
};

export default SingleProduct;
