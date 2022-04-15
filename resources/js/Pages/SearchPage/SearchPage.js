import React from "react";
import SearchInput from "../../components/SmallComps/SearchInput";
//import Img1 from "../../assets/images/products/1.png";
//import Img2 from "../../assets/images/products/2.png";
//import Img3 from "../../assets/images/products/3.png";
import { ProductBox } from "../../components/ProductBox/ProductBox";
import "./SearchPage.css";

const SearchPage = () => {
  const productsFound = [
    {
      link: "/single-product",
      img: "/assets/images/products/1.png",
      name: "ძროხის რძე",
    },
    {
      link: "/single-product",
      img: "/assets/images/products/2.png",
      name: "ძროხის რძე",
    },
    {
      link: "/single-product",
      img: "/assets/images/products/3.png",
      name: "ძროხის რძე",
    },
    {
      link: "/single-product",
      img: "/assets/images/products/2.png",
      name: "ძროხის რძე",
    },
  ];
  return (
    <div className="search_page">
      <SearchInput color="#ACD3C1" />
      <div className="wrapper content">
        <div className="op05 bpg">"საძიებო სიტყვა" ნაპოვნია 5 შედეგი</div>
        <div className="wrapper2">
          {productsFound.map((product, index) => {
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
    </div>
  );
};

export default SearchPage;
