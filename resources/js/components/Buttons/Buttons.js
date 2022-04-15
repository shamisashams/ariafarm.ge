import React from "react";
//import Left from "../../assets/images/icons/arrow-left.svg";
//import Right from "../../assets/images/icons/arrow-right.svg";
//import Left2 from "../../assets/images/icons/ll1.svg";
//import Right2 from "../../assets/images/icons/rr1.svg";
import "./Buttons.css";

export const MainButton = ({ text, onClick }) => {
  return (
    <button className="main_button" onClick={onClick}>
      {text}
    </button>
  );
};

export const ArrowLeft = () => {
  return (
    <button className="arrow_button arr_left flex centered">
      <img src="/assets/images/icons/arrow-left.svg" alt="" />
    </button>
  );
};

export const ArrowRight = () => {
  return (
    <button className="arrow_button arr_right flex centered">
      <img src="/assets/images/icons/arrow-right.svg" alt="" />
    </button>
  );
};

// orange
export const ArrowLeft2 = () => {
  return (
    <button className="arrow_button arr_left flex centered">
      <img src="/assets/images/icons/ll1.svg" alt="" />
    </button>
  );
};

export const ArrowRight2 = () => {
  return (
    <button className="arrow_button arr_right flex centered">
      <img src="/assets/images/icons/rr1.svg" alt="" />
    </button>
  );
};
