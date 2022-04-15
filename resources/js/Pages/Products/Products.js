import React, { useState } from "react";
import { ProductBox } from "../../components/ProductBox/ProductBox";
import PagePath from "../../components/SmallComps/PagePath";
import SearchInput from "../../components/SmallComps/SearchInput";
import "./Products.css";
import { showcaseData, tabsData } from "./ProductsData";
import Layout from "../../Layouts/Layout";

const Products = ({seo}) => {
  const [productTab, setProductTab] = useState(0);
  return (
      <Layout seo={seo}>
        <div className="productsPage">
      <SearchInput color="#ACD3C1" />
      <div className="wrapper">
        <PagePath prev="მთავარი" current="პროდუქცია" color="#949494" />
        <div className="product_showcase">
          <div className="title50">პროდუქცია</div>
          <p className="op05">
            "არია" გთავაზობთ ქართულ, მხოლოდ ჩვენს მიერ წარმოებულ, ეკოლოგიურად
            სუფთა, 100% ნატურალ რძის პროდუქტებს.
          </p>
          <div className="tab_btns">
            {showcaseData.map((data, index) => {
              return (
                <button
                  className={
                    productTab === index ? "tab_btn active" : "tab_btn"
                  }
                  key={index}
                  onClick={() => setProductTab(index)}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
          {showcaseData.map((data, index) => {
            return (
              <div
                key={index}
                className={
                  productTab === index ? "showcase_icon shown" : "showcase_icon"
                }
              >
                <div className="bg_text">{data.title}</div>
                <div className="icon">{data.img}</div>
              </div>
            );
          })}
        </div>
        <div className="product_tabs">
          {tabsData.map((data, index) => {
            return (
              <div
                key={index}
                className={
                  productTab === index ? "content_tab active" : "content_tab"
                }
              >
                {data.eachTab.map((tab, index) => {
                  return (
                    <div key={index} className="category">
                      <div className="title35 gradient-bg h60">
                        {tab.category}
                      </div>
                      <div className="products_in_cat">
                        {tab.categoryProducts.map((product, index) => {
                          return (
                            <ProductBox
                              key={index}
                              link={product.link}
                              productName={product.name}
                              imgSrc={product.img}
                            />
                          );
                        })}
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
