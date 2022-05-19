import React from "react";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import "./ProductBox.css";

export const ProductBox = ({ imgSrc, productName, link }) => {
    return (
        <Link href={link} className="product_box" data-aos="zoom-in">
            <div className="img">
                <img src={imgSrc} alt="" />
            </div>
            <p>{productName}</p>
        </Link>
    );
};
