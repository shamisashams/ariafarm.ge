import React from "react";
import { BlogBoxLarge } from "../../components/BlogObjects/BlogObjects";
import PagePath from "../../components/SmallComps/PagePath";
import SearchInput from "../../components/SmallComps/SearchInput";
//import Img1 from "../../assets/images/blogs/9.png";
//import Img2 from "../../assets/images/blogs/10.png";
//import Img3 from "../../assets/images/blogs/11.png";
//import Img4 from "../../assets/images/blogs/12.png";
import "./Blogs.css";
import Layout from "../../Layouts/Layout";

const Blogs = ({seo}) => {
  const blogsList = [
    {
      link: "/single-blog",
      img: "/assets/images/blogs/9.png",
      subject: "თემა",
      title: "ბლოგის სათაური",
      paragraph:
        "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა, რაც ჯანსაღი და სასარგებლო პროდუქციის წარმოების გარანტია.",
      date: "02 / 10 / 2022",
    },
    {
      link: "/single-blog",
      img: "/assets/images/blogs/10.png",
      subject: "თემა",
      title: "ბლოგის სათაური",
      paragraph:
        "არია ქართული ბრენდია. აღნიშნული საწარ საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა, რაც ჯანსაღი და სასარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა, რაც ჯანსაღი და სასარგებლო პროდუქციის წარმოების გარანტია.",
      date: "02 / 10 / 2022",
    },
    {
      link: "/single-blog",
      img: "/assets/images/blogs/11.png",
      subject: "თემა",
      title: "ბლოგის სათაური",
      paragraph:
        "არია ქართული ბრენდია. აღნიშნულიგებლო პროდუქციის წარმოების გარანტია.",
      date: "02 / 10 / 2022",
    },
    {
      link: "/single-blog",
      img: "/assets/images/blogs/12.png",
      subject: "თემა",
      title: "ბლოგის სათაური",
      paragraph:
        "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის სოფელ მენჯში 60 ჰა მიწის ფართობზეაგანლაგებული. ფერმა ყველა საერთაშორისო სტანდარტის დაცვით აშენდა, რაც ჯანსაღი და სასარგებლო პროდუქციის წარმოების გარანტია.",
      date: "02 / 10 / 2022",
    },
  ];
  return (
      <Layout seo={seo}>
          <div className="blogsPage">
              <SearchInput color="#ACD3C1" />
              <div className="wrapper">
                  <PagePath prev="მთავარი" current="ბლოგი" color="#949494" />
                  <div className="main">
                      <div className="title50">ბლოგი</div>
                      {blogsList.map((blog, index) => {
                          return (
                              <BlogBoxLarge
                                  key={index}
                                  img={blog.img}
                                  subject={blog.subject}
                                  title={blog.title}
                                  paragraph={blog.paragraph}
                                  link={route('client.blog.show','blog')}
                                  date={blog.date}
                              />
                          );
                      })}
                  </div>
              </div>
          </div>
      </Layout>
  );
};

export default Blogs;
