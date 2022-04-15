import React, { useState } from "react";
import "./Questions.css";

export const Questions = () => {
  const [revealAnswer, setRevealAnswer] = useState(0);

  const QandAData = [
    {
      question:
        "Can cow milk yogurt be made to be more digestible? What’s the deal with A2 protein?",
      answer:
        "Aria is a Georgian brand. The enterprise is located on 60 hectares ofland in the village of Menji, Senaki district, Samegrelo. The farm wasbuilt in compliance with all international standards, which guaranteesthee enterprise is located on 60 hectares ofland in the village of Menji, Senaki district, Samegrelo. The farm wasbuilt in compliance with all international standards, which guaranteesthe  production of healthy and useful products.",
    },
    {
      question: "Is sheep milk yogurt more digestible?",
      answer:
        "Aria is a Georgian brand. The enterprise is located  ealthy and useful products.",
    },
    {
      question: "Is your yogurt gluten free?",
      answer:
        "Aria is a Georgian brand. The enterprise is located on 60 hectares ofland in the village of Menji, Senaki district, Samegrelo. The farm wasbuilt in compliance with all international standards, which guaranteesthe produe enterprise is located on 60 hectares ofland in the village of Menji, Senaki district, Samegrelo. The farm wasbuilt in complianlthy and useful products.",
    },
    {
      question: "Why is there liquid sometime on the top of my yogurt?",
      answer:
        "Aria is a Georgian brand. The enterprise isce with all international standards, which guaranteesthe ction of hea located on 60 hectares ofland in the village of Menji, Senaki district, Samegrelo. The farm wasbuilt in compliance with all international standards, which guaranteesthe production of healthy and useful products.",
    },
  ];
  return (
    <>
      {QandAData.map((data, index) => {
        return (
          <div
            className={
              revealAnswer === index + 1 ? "question open" : "question"
            }
            key={index}
            onClick={
              revealAnswer === index + 1
                ? () => setRevealAnswer(0)
                : () => setRevealAnswer(index + 1)
            }
          >
            <div className="q">{data.question}</div>
            <p className="answer">{data.answer}</p>
          </div>
        );
      })}
    </>
  );
};
