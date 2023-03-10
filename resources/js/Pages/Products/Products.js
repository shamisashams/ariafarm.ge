import React, { useState } from "react";
import { ProductBox } from "../../components/ProductBox/ProductBox";
import PagePath from "../../components/SmallComps/PagePath";
import SearchInput from "../../components/SmallComps/SearchInput";
import "./Products.css";
import { showcaseData, tabsData } from "./ProductsData";
import Layout from "../../Layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";
import { Buffalo, Cow, Goat } from "../../components/SmallComps/Icons";
import { Questions } from "../../components/Questions/Questions";

const Products = ({ seo }) => {
    const [productTab, setProductTab] = useState(0);
    const { categories, products } = usePage().props;
    const sharedData = usePage().props.localizations;

    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    return (
        <Layout seo={seo}>
            <div className="productsPage">
                <SearchInput color="#bf7e2f" />
                <div className="wrapper">
                    <PagePath
                        prev={__("client.nav_home", sharedData)}
                        current={__("client.nav_products", sharedData)}
                        color="#949494"
                    />
                    <div className="product_showcase">
                        <div className="title50">
                            {__("client.product_header", sharedData)}
                        </div>
                        <p className="op05">
                            {renderHTML(
                                __(
                                    "client.product_text",
                                    sharedData
                                ).newLineToBr()
                            )}
                        </p>
                        <div className="tab_btns">
                            {categories.map((data, index) => {
                                return (
                                    <button
                                        className={
                                            productTab === index
                                                ? "tab_btn active"
                                                : "tab_btn"
                                        }
                                        key={index}
                                        onClick={() => setProductTab(index)}
                                    >
                                        {data.title}
                                    </button>
                                );
                            })}
                        </div>
                        {categories.map((data, index) => {
                            let img;
                            switch (data.slug) {
                                case "cow":
                                    img = <Cow color="#BF7E2F" />;
                                    break;
                                case "goat":
                                    img = <Goat color="#BF7E2F" />;
                                    break;
                                case "buffalo":
                                    img = <Buffalo color="#BF7E2F" />;
                                    break;
                            }
                            return (
                                <div
                                    key={index}
                                    className={
                                        productTab === index
                                            ? "showcase_icon shown"
                                            : "showcase_icon"
                                    }
                                >
                                    <div className="bg_text">{data.title}</div>
                                    <div className="icon">{img}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="product_tabs">
                        {categories.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        productTab === index
                                            ? "content_tab active"
                                            : "content_tab"
                                    }
                                >
                                    {data.children.map((tab, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="category"
                                            >
                                                <div className="title35 gradient-bg h60">
                                                    {tab.title}
                                                </div>
                                                <div className="products_in_cat">
                                                    {products.hasOwnProperty(
                                                        tab.id
                                                    )
                                                        ? products[tab.id].map(
                                                              (
                                                                  product,
                                                                  index
                                                              ) => {
                                                                  return (
                                                                      <ProductBox
                                                                          key={
                                                                              index
                                                                          }
                                                                          link={route(
                                                                              "client.product.show",
                                                                              product.slug
                                                                          )}
                                                                          productName={
                                                                              product.title
                                                                          }
                                                                          imgSrc={
                                                                              product.latest_image !=
                                                                              null
                                                                                  ? "/" +
                                                                                    product
                                                                                        .latest_image
                                                                                        .path +
                                                                                    "/" +
                                                                                    product
                                                                                        .latest_image
                                                                                        .title
                                                                                  : null
                                                                          }
                                                                          productCaption={
                                                                              product.short_description
                                                                          }
                                                                      />
                                                                  );
                                                              }
                                                          )
                                                        : null}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
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

export default Products;
