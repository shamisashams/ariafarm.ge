import React from "react";
import SearchInput from "../../components/SmallComps/SearchInput";
//import Img1 from "../../assets/images/products/1.png";
//import Img2 from "../../assets/images/products/2.png";
//import Img3 from "../../assets/images/products/3.png";
import { ProductBox } from "../../components/ProductBox/ProductBox";
import "./SearchPage.css";
import Layout from "../../Layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";

const SearchPage = ({ seo }) => {
    const { products } = usePage().props;
    const sharedData = usePage().props.localizations;
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
        <Layout seo={seo}>
            <div className="search_page">
                <SearchInput color="#bf7e2f" />
                <div className="wrapper content">
                    <div className="op05 bpg">
                        "საძიებო სიტყვა" ნაპოვნია {products.length} შედეგი
                    </div>
                    <div className="wrapper2">
                        {products.map((product, index) => {
                            return (
                                <ProductBox
                                    key={index}
                                    link={route(
                                        "client.product.show",
                                        product.slug
                                    )}
                                    productName={product.title}
                                    imgSrc={
                                        product.latest_image != null
                                            ? "/" +
                                              product.latest_image.path +
                                              "/" +
                                              product.latest_image.title
                                            : null
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SearchPage;
