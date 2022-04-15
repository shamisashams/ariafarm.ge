import React from "react";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import { MainButton } from "../Buttons/Buttons";
import "./FermaSection.css";

const FermaSection = (props) => {
  return (
    <div className="ferma_section">
      <div className="wrapper2 flex">
        <div className="left">
          <div className="title35">{props.title}</div>
          <p>{props.paragraph}</p>
          <Link href={props.link}>
            <MainButton text="გაიგე მეტი" />
          </Link>
        </div>
        <div className="img">
          <img src={props.imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FermaSection;
