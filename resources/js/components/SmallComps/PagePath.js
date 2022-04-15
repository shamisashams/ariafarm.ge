import React from "react";
import { ArrowRight } from "./Icons";

const PagePath = ({ prev, current, color }) => {
  return (
    <div
      className="pagepath "
      style={{ color: color, zIndex: "100", position: "relative" }}
    >
      <span>{prev}</span>
      <ArrowRight color={color} />
      <span>{current}</span>
    </div>
  );
};

export default PagePath;
