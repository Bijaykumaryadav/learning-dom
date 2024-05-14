import React from "react";
// m-2 of faq 'component based'
function Faqs() {
  return (
    <div>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqouter"></div>
      <FaqItems />
      <FaqItems />
      <FaqItems />
      <div />
    </div>
  );
}

function FaqItems() {
  return (
    <div className="faqItems">
      <h2>Hello</h2>
      <p>WS</p>
    </div>
  );
}

export default Faqs;
