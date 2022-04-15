import React from "react";
import { MainButton } from "../Buttons/Buttons";
import "./Form.css";

export const Form = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "სახელი",
    },
    {
      type: "text",
      placeholder: "გვარი",
    },
    {
      type: "text",
      placeholder: "იმეილი",
    },
    {
      type: "text",
      placeholder: "ტელეფონი",
    },
  ];
  return (
    <div className="form">
      <div className="title35 green">მოგვწერე</div>
      {inputs.map((item, index) => {
        return (
          <input key={index} type={item.type} placeholder={item.placeholder} />
        );
      })}
      <textarea placeholder="შეტყობინება"></textarea>
      <MainButton text="გაგზავნა" />
    </div>
  );
};
