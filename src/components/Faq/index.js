import React from "react";
import faqStyle from "./style/Faq.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  return (
    <div className={faqStyle.sub}>
      <div className={faqStyle.faQSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={faqStyle.details}>
        <div className={faqStyle.faqItem}>
          <p>What is Netflix</p>
          <AiOutlinePlus size={30} />
        </div>
        <div className={faqStyle.faqItem}>
          <p>How much does netflix cost?</p>
          <AiOutlinePlus size={30} />
        </div>
        <div className={faqStyle.faqItem}>
          <p>Where can I watch?</p>
          <AiOutlinePlus size={30} />
        </div>
        <div className={faqStyle.faqItem}>
          <p>How can I cancel?</p>
          <AiOutlinePlus size={30} />
        </div>
        <div className={faqStyle.faqItem}>
          <p>What can I watch on Netflix?</p>
          <AiOutlinePlus size={30} />
        </div>
        </div>
        <div className={faqStyle.getStartedBox}>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            <input
              className={faqStyle.getStartedInput}
              placeholder="Email address"
            />
            <button
              className={`${faqStyle.button} ${faqStyle.getStartedButton}`}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
