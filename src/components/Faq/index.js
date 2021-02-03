import React from 'react';
import faqStyle from "./style/Faq.module.css";



const Faq = () => {
    return (
        <div className={faqStyle.section}>
            <div className={faqStyle.faQSection}>
                <h2 className={faqStyle.faQheader}>Frequently Asked Questions</h2>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>What is Netflix</p>
                    <p className={faqStyle.faqItemIcon}>+</p>
                </div>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>How much does netflix cost?</p>
                    <p className={faqStyle.faqItemIcon}>+</p>
                </div>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>Where can I watch?</p>
                    <p className={faqStyle.faqItemIcon}>+</p>
                </div>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>How can I cancel?</p>
                    <p className={faqStyle.faqItemIcon}>+</p>
                </div>
                <div className={faqStyle.faqItem}>
                    <p className={faqStyle.faqItemTitle}>What can I watch on Netflix?</p>
                    <p className={faqStyle.faqItemIcon}>+</p>
                </div>
                <div className={faqStyle.getStartedBox}>
                    <p clameName={faqStyle.getStartedCaption}>Ready to watch? Enter your email to create or restart your membership.
          </p>
                    <div>
                        <input className={faqStyle.getStartedInput} placeholder="enter your email" />
                        <button class={`${faqStyle.button} ${faqStyle.getStartedButton}`}>Get started </button>
                    </div>
                </div>
            </div>
            </div>
    )
}


export default Faq;