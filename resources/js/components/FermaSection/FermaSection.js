import React from "react";
import { Link } from "react-router-dom";
import { MainButton } from "../Buttons/Buttons";
import "./FermaSection.css";

const FermaSection = (props) => {
  return (
    <div className="ferma_section">
      <div className="wrapper2 flex">
        <div className="left">
          <div className="title35">{props.title}</div>
          <p>{props.paragraph}</p>
          <Link to={props.link}>
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
