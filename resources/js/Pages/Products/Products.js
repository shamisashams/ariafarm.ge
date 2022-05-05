import React, { useState } from "react";
import { ProductBox } from "../../components/ProductBox/ProductBox";
import PagePath from "../../components/SmallComps/PagePath";
import SearchInput from "../../components/SmallComps/SearchInput";
import "./Products.css";
import { showcaseData, tabsData } from "./ProductsData";
import Layout from "../../Layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";
import { Buffalo, Cow, Goat } from "../../components/SmallComps/Icons";

const Products = ({ seo }) => {
    const [productTab, setProductTab] = useState(0);
    const { categories, products } = usePage().props;
    const sharedData = usePage().props.localizations;

    console.log(categories);
    console.log(products);

    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    return (
        <Layout seo={seo}>
            <div className="productsPage">
                <SearchInput color="#000" />
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
                                    img = <Cow color="#8EAFA0" />;
                                    break;
                                case "goat":
                                    img = <Goat color="#8EAFA0" />;
                                    break;
                                case "buffalo":
                                    img = <Buffalo color="#8EAFA0" />;
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
                                                <div
                                                    className="title35 gradient-bg h60"
                                                    data-aos="fade-right"
                                                >
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
            </div>
        </Layout>
    );
};

export default Products;
