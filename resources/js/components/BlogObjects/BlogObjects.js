import React from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import { MainButton } from "../Buttons/Buttons";
//import Calendar from "../../assets/images/icons/calendar.svg";
import "./BlogObjects.css";

// imgs
//import Img1 from "../../assets/images/blogs/9.png";
//import Img2 from "../../assets/images/blogs/10.png";
//import Img3 from "../../assets/images/blogs/11.png";
//import Img4 from "../../assets/images/blogs/12.png";
import { SocialLinks2 } from "../SmallComps/SocialLinks";

export const BlogBoxSmall = (props) => {
    const sharedData = usePage().props.localizations;
    return (
        <div className="blogbox blogbox_small">
            <div className="img">
                <img src={props.img} alt="" />
            </div>
            <div className="date">
                <img src="/assets/images/icons/calendar.svg" alt="" />
                {props.date}
            </div>
            <div className="title">{props.title}</div>
            <p>{props.paragraph}</p>
            <Link href={props.link}>
                <MainButton text={__("client.blog_learn_more", sharedData)} />
            </Link>
        </div>
    );
};

export const BlogBoxLarge = (props) => {
    const sharedData = usePage().props.localizations;
    return (
        <div className="blogbox blogbox_large" data-aos="fade-up">
            <div className="img">
                <img src={props.img} alt="" />
            </div>
            <div className="context">
                <div className="subject bpg green ">{props.subject}</div>
                <div className="title">{props.title}</div>
                <p>{props.paragraph}</p>
                <Link href={props.link}>
                    <MainButton
                        text={__("client.blog_learn_more", sharedData)}
                    />
                </Link>
                <div className="bottom flex">
                    <div className="date">
                        <img src="/assets/images/icons/calendar.svg" alt="" />
                        {props.date}
                    </div>
                    <div className="sm flex centered">
                        <SocialLinks2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

// no more than 4 objects should be allowed in this array
export const smallBoxData = [
    {
        link: "/single-blog",
        img: "/assets/images/blogs/9.png",
        title: "ბლოგის სათაური",
        date: "02 / 10 / 2022",
        paragraph:
            "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის",
    },
    {
        link: "/single-blog",
        img: "/assets/images/blogs/10.png",
        title: "ბლოგის სათაური",
        date: "02 / 10 / 2022",
        paragraph:
            "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის",
    },
    {
        link: "/single-blog",
        img: "/assets/images/blogs/11.png",
        title: "ბლოგის სათაური",
        date: "02 / 10 / 2022",
        paragraph:
            "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის",
    },
    {
        link: "/single-blog",
        img: "/assets/images/blogs/12.png",
        title: "ბლოგის სათაური",
        date: "02 / 10 / 2022",
        paragraph:
            "არია ქართული ბრენდია. აღნიშნული საწარმო სამეგრელოში, სენაკის რაიონის",
    },
];
