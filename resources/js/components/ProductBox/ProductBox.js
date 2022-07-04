import React from "react";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import "./ProductBox.css";

export const ProductBox = ({ imgSrc, productName, link, productCaption }) => {
    return (
        <Link href={link} className="product_box">
            <div className="name">{productName}</div>
            <div className="img">
                <img src={imgSrc} alt="" />
            </div>
            <p className="caption">{productCaption}</p>
        </Link>
    );
};
