import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
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

const SingleProduct = ({ seo, page }) => {
    console.log(page);
    const { product, product_images, similar_products, cards, category_path } =
        usePage().props;
    const sharedData = usePage().props.localizations;

    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    // productColor varies for each product
    let productColor = "#155228";
    const [showImg, setShowImg] = useState(0);
    const images = [
        "/assets/images/products/1.png",
        "/assets/images/products/2.png",
        "/assets/images/products/3.png",
    ];
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
    let prod_link = [];
    if (similar_products.length > 0 && similar_products.length < 2) {
        prod_link[0] = similar_products[0];
        prod_link[1] = similar_products[0];
    } else if (similar_products.length > 1) {
        prod_link[0] = similar_products[0];
        prod_link[1] = similar_products[1];
    } else {
        prod_link[0] = product;
        prod_link[1] = product;
    }
    return (
        <Layout seo={seo}>
            <div className="singleProduct">
                <SearchInput color="#ACD3C1" />
                <div className="wrapper showcase">
                    <Link
                        href={route("client.product.index")}
                        className="back"
                        style={{ color: "#939393" }}
                    >
                        <img
                            src="/assets/images/icons/long-arrow-alt-left.svg"
                            alt=""
                        />{" "}
                        {__("client.product_back", sharedData)}
                    </Link>
                    <div className="flex main">
                        {/* this goes to the previous product page */}
                        <Link
                            href={route(
                                "client.product.show",
                                prod_link[0].slug
                            )}
                        >
                            <ArrowLeft />
                        </Link>
                        {/* this goes to the next product page */}
                        <Link
                            href={route(
                                "client.product.show",
                                prod_link[1].slug
                            )}
                        >
                            <ArrowRight />
                        </Link>
                        <div className="images">
                            {product_images.map((img, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={
                                            showImg === index
                                                ? "img large show"
                                                : "img large"
                                        }
                                    >
                                        <img
                                            src={
                                                "/" + img.path + "/" + img.title
                                            }
                                            alt=""
                                        />
                                    </div>
                                );
                            })}
                            <div className="flex centered">
                                {product_images.map((img, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="img"
                                            onClick={() => setShowImg(index)}
                                        >
                                            <img
                                                src={
                                                    "/" +
                                                    img.path +
                                                    "/" +
                                                    img.title
                                                }
                                                alt=""
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="details" data-aos="fade-up">
                            <div className="title50 gradient-bg rtl h100">
                                {product.title}
                            </div>
                            <div className="green">
                                {__("client.product_about_head", sharedData)}
                            </div>
                            <p className="op05">
                                {renderHTML(product.description)}
                            </p>
                            <div className="green">
                                {__(
                                    "client.product_composition_head",
                                    sharedData
                                )}
                            </div>
                            <p className="op05">
                                {renderHTML(
                                    product.composition !== null
                                        ? product.composition.newLineToBr()
                                        : null
                                )}
                            </p>
                            <div className="green">
                                {__(
                                    "client.product_recommend_head",
                                    sharedData
                                )}
                            </div>
                            <p className="op05">
                                {renderHTML(
                                    product.recommendation !== null
                                        ? product.recommendation.newLineToBr()
                                        : null
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cards_sec">
                    <div className="wrapper">
                        <div className="text">
                            <div className="title35">
                                {renderHTML(
                                    __(
                                        "client.product_cards_head",
                                        sharedData
                                    ).newLineToBr()
                                )}
                            </div>
                            <p>
                                {renderHTML(
                                    __(
                                        "client.product_cards_text",
                                        sharedData
                                    ).newLineToBr()
                                )}
                            </p>
                        </div>
                        <CardSlider cardData={cards} category={category_path} />
                    </div>
                </div>
                <div className="recipe wrapper2 flex">
                    <div className="img" data-aos="zoom-in">
                        <img src={"/" + product.recipe_img} alt="" />
                    </div>
                    <div className="context">
                        <div className="title50 gradient-bg rtl h100">
                            {__("client.product_recipe", sharedData)}
                        </div>
                        <p className="op05">
                            {renderHTML(
                                product.recipe
                                    ? product.recipe.newLineToBr()
                                    : null
                            )}
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
                            <span>
                                {__("client.product_share", sharedData)}
                            </span>
                        </Link>
                    </div>
                </div>
                <FermaSection
                    imgSrc={
                        page.sections[0].file !== null
                            ? "/" +
                              page.sections[0].file.path +
                              "/" +
                              page.sections[0].file.title
                            : null
                    }
                    link={route("client.farm.index")}
                    title={__("client.product_section_title", sharedData)}
                    paragraph={__("client.product_section_text", sharedData)}
                />
            </div>
        </Layout>
    );
};

export default SingleProduct;
