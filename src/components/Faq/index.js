import React from 'react';
import faqStyle from "./style/Faq.module.css";
import {AiOutlinePlus} from "react-icons/ai";



const Faq = () => {
    return (
        <div className={faqStyle.sub}>
        <div className={faqStyle.section}>
            <div className={faqStyle.faQSection}>
                <h2 className={faqStyle.faQheader}>Frequently Asked Questions</h2>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>What is Netflix</p>
                    <AiOutlinePlus className={faqStyle.faqItemIcon}  size={30}/>
                </div>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>How much does netflix cost?</p>
                    <AiOutlinePlus className={faqStyle.faqItemIcon} size={30} />
                </div>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>Where can I watch?</p>
                    <AiOutlinePlus className={faqStyle.faqItemIcon} size={30} />
                </div>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>How can I cancel?</p>
                    <AiOutlinePlus className={faqStyle.faqItemIcon} size={30} />
                </div>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>What can I watch on Netflix?</p>
                    <AiOutlinePlus className={faqStyle.faqItemIcon} size={30} />
                </div>
                <div className={faqStyle.getStartedBox}>
                    <p clameName={faqStyle.getStartedCaption}>Ready to watch? Enter your email to create or restart your membership.
          </p>
                    <div>
                        <input className={faqStyle.getStartedInput} placeholder="Email address" />
                        <button class={`${faqStyle.button} ${faqStyle.getStartedButton}`}>Get started </button>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}


export default Faq;