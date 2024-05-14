import React, { useState } from "react";
import { questions } from "./Data/faqQuestion";

function Faqs() {
  let [currentId, setCurrentId] = useState(questions[0].qno);

  let Items = questions.map((itemsData, i) => {
    let itemDetails = {
      itemsData,
      currentId,
      setCurrentId,
    };

    return <FaqItems itemDetails={itemDetails} key={i} />;
  });
  return (
    <div>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqouter">{Items}</div>
      <div />
    </div>
  );
}

function FaqItems({ itemDetails }) {
  let { itemsData, currentId, setCurrentId } = itemDetails;
  return (
    <div className="faqItems">
      <h2 onClick={() => setCurrentId(itemsData.qno)}>{itemsData.question}</h2>
      <p className={currentId === itemsData.qno ? "activeAns" : ""}>
        {itemDetails.itemsData.answer}
      </p>
    </div>
  );
}

export default Faqs;
