import React from "react";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import "./ProductBox.css";

export const ProductBox = ({ imgSrc, productName, link }) => {
    return (
        <Link href={link} className="product_box" data-aos="zoom-in">
            <img src={imgSrc} alt="" />
            <p>{productName}</p>
        </Link>
    );
};
