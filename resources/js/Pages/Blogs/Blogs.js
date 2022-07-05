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
import { usePage } from "@inertiajs/inertia-react";
import { Questions } from "../../components/Questions/Questions";

const Blogs = ({ seo }) => {
    const { blogs } = usePage().props;
    const sharedData = usePage().props.localizations;
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
                <SearchInput color="#bf7e2f" />
                <div className="wrapper">
                    <PagePath
                        prev={__("client.nav_home", sharedData)}
                        current={__("client.nav_blog", sharedData)}
                        color="#949494"
                    />
                    <div className="main">
                        <div className="title50">
                            {__("client.blog", sharedData)}
                        </div>
                        {blogs.map((blog, index) => {
                            return (
                                <BlogBoxLarge
                                    key={index}
                                    img={
                                        blog.oldest_image != null
                                            ? "/" +
                                              blog.oldest_image.path +
                                              "/" +
                                              blog.oldest_image.title
                                            : null
                                    }
                                    subject={blog.subject}
                                    title={blog.title}
                                    paragraph={blog.short_description}
                                    link={route("client.blog.show", blog.slug)}
                                    date={blog.created_at}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="faq wrapper">
                    <div className="title35" style={{ textAlign: "center" }}>
                        {__("client.home_faq", sharedData)}
                    </div>
                    <Questions />
                </div>
            </div>
        </Layout>
    );
};

export default Blogs;
