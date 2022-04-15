import React from "react";
import PagePath from "../../components/SmallComps/PagePath";
import SearchInput from "../../components/SmallComps/SearchInput";
//import Img1 from "../../assets/images/articles/2.png";
//import Img2 from "../../assets/images/articles/3.png";
//import Img3 from "../../assets/images/blogs/6.png";
import "./ArticlePages.css";
import { SocialLinks2 } from "../../components/SmallComps/SocialLinks";
import FermaSection from "../../components/FermaSection/FermaSection";

const Enterprise = () => {
  return (
    <div className="articlePages blogbox">
      <SearchInput color="#fff" />
      <div className="article_showcase" style={{ background: `url('/assets/images/articles/2.png')` }}>
        <div className="wrapper">
          <PagePath prev="მთავარი" current="საწარმო" color="#fff" />
        </div>
      </div>
      <div className="wrapper2 content">
        <div className="title50">საწარმო</div>
        <p>
          ლორემ იპსუმ ზღაპარია მატარა ქეთინომაც, ითამაშეო გავიგდებ უთვალავს
          ქვევრში. გაბედოთ გამოგვყვები გაყვირებს სანოვაგე მიუმართავთ ღვიოდა
          საჯაროდ. მეგობრობის ბურთულა ვულგარული ხვრელებსა ქვევრში უთვალავს.
          შესთავაზებს ცუდმავალი ტირანმა, ეცემა მარაზმზე, გავიგდებ ქვევრში
          სამაგისო რახტიც პირობებით. ბარათებს პირობებით გაყვირებს ბბილეთი
          ვულგარული მამიკვდე დერიდამ. თხზულების სახელწოდებები გამორჩა დაკითხა,
          მოიხიბლებოდა საგვარეულოს დავინტერესებულიყავით გადაგიხადო ბაბინებზე.
          ეცემა სანოვაგე ეზოსა მზემ მატარა გვიკვირს ხვრელებსა, ვულგარული სიაზე
          ყინული პირობებით ბატკნებს მიუმართავთ მოსვა უთვალავს. მეგობრობის
          გავიგდებ ფშვინვას მოსვა ვულგარული ბურთულა ბაბინებზე მოიქცნენ. დასვა
          ქეთინომაც პრაქტიკულ ეზოსა დაკითხა გვიკვირს ოცდამეოთხე ვერტიკალურ
          პირობებით გყოფნით. იკურნება გაიფანტა ვერტიკალურ გაყვირებს
          გამოსარჩლებამ გავიგდებ მოიქცნენ გადმოაღებინა აფხაზეთით ეცემა.
        </p>
        <p>
          ლორემ იპსუმ ზღაპარია მატარა ქეთინომაც, ითამაშეო გავიგდებ უთვალავს
          ქვევრში. გაბედოთ გამოგვყვები გაყვირებს სანოვაგე მიუმართავთ ღვიოდა
          საჯაროდ. მეგობრობის ბურთულა ვულგარული ხვრელებსა ქვევრში უთვალავს.
          შესთავაზებს ცუდმავალი ტირანმა, ეცემა მარაზმზე, გავიგდებ ქვევრში
          სამაგისო რახტიც პირობებით. ბარათებს პირობებით გაყვირებს ბბილეთი
          ვულგარული მამიკვდე დერიდამ. თხზულების სახელწოდებები გამორჩა დაკითხა,
          მოიხიბლებოდა საგვარეულოს დავინტერესებულიყავით გადაგიხადო ბაბინებზე.
          ეცემა სანოვაგე ეზოსა მზემ მატარა გვიკვირს ხვრელებსა, ვულგარული სიაზე
          ყინული პირობებით ბატკნებს მიუმართავთ მოსვა უთვალავს. მეგობრობის
          გავიგდებ ფშვინვას მოსვა ვულგარული ბურთულა ბაბინებზე მოიქცნენ. დასვა
          ქეთინომაც პრაქტიკულ ეზოსა დაკითხა გვიკვირს ოცდამეოთხე ვერტიკალურ
          პირობებით გყოფნით. იკურნება გაიფანტა ვერტიკალურ გაყვირებს
          გამოსარჩლებამ გავიგდებ მოიქცნენ გადმოაღებინა აფხაზეთით ეცემა.
        </p>
        <div className="art_img img">
          <img src="/assets/images/articles/2.png" alt="" />
        </div>
        <p>
          ლორემ იპსუმ ზღაპარია მატარა ქეთინომაც, ითამაშეო გავიგდებ უთვალავს
          ქვევრში. გაბედოთ გამოგვყვები გაყვირებს სანოვაგე მიუმართავთ ღვიოდა
          საჯაროდ. მეგობრობის ბურთულა ვულგარული ხვრელებსა ქვევრში უთვალავს.
          შესთავაზებს ცუდმავალი ტირანმა, ეცემა მარაზმზე, გავიგდებ ქვევრში
          სამაგისო რახტიც პირობებით. ბარათებს პირობებით გაყვირებს ბბილეთი
          ვულგარული მამიკვდე დერიდამ. თხზულების სახელწოდებები გამორჩა დაკითხა,
          მოიხიბლებოდა საგვარეულოს დავინტერესე უთვალავს. მეგობრობის გავიგდებ
          ფშვინვას მოსვა ვულგარული ბურთულა ბაბინებზე მოიქცნენ. დასვა ქეთინომაც
          პრაქტიკულ ეზოსა დაკითხა გვიკვირს ოცდამეოთხე ვერტიკალურ პირობებით
          გყოფნით. იკურნება გაიფანტა ვერტიკალურ გაყვირებს გამოსარჩლებამ გავიგდებ
          მოიქცნენ გადმოაღებინა აფხაზეთით ეცემა.
        </p>
      </div>
      <FermaSection
        imgSrc="/assets/images/blogs/6.png"
        link="/"
        title="მაღაზიები"
        paragraph="შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს,"
      />
      <div className="wrapper2">
        <div className="art_img  img">
          <img src="/assets/images/articles/3.png" alt="" />
        </div>
        <p>
          ლორემ იპსუმ ზღაპარია მატარა ქეთინომაც, ითამაშეო გავიგდებ უთვალავს
          ქვევრში. გაბედოთ გამოგვყვები გაყვირებს სანოვაგე მიუმართავთ ღვიოდა
          საჯაროდ. მეგობრობის ბურთულა ვულგარული ხვრელებსა ქვევრში უთვალავს.
          შესთავაზებს ცუდმავალი ტირანმა, ეცემა მარაზმზე, გავიგდებ ქვევრში
          სამაგისო რახტიც პირობებით. ბარათებს პირობებით გაყვირებს ბბილეთი
          ვულგარული მამიკვდე დერიდამ. თხზულების სახელწოდებები გამორჩა დაკითხა,
          მოიხიბლებოდა საგვარეულოს დავინტერესებულიყავით გადაგიხადო ბაბინებზე.
          ეცემა სანოვაგე ეზოსა მზემ მატარა გტიკალურ გაყვირებს გამოსარჩლებამ
          გავიგდებ მოიქცნენ გადმოაღებინა აფხაზეთით ეცემა.
        </p>
        <SocialLinks2 />
      </div>
    </div>
  );
};

export default Enterprise;
