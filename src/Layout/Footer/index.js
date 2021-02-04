import React from 'react';
import footStyle from "./style/Footer.module.css";

const Footer = () => {
    return(
        <div className={footStyle.backgroundcolor}>
            <div className={footStyle.content}>
            <h4>Questions? Contact us.</h4>
            <div className={footStyle.section}>
                <div className={footStyle.sectionOne}>
                    <p>Faq</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                <div className={footStyle.sectionTwo}>
                    <p>Help Centers</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div className={footStyle.sectionThree}>
                    <p>Account</p>
                    <p>Coperate Informations</p>
                    <p>Ways to Watch</p>
                    <p>Netflix Originals</p>
                </div>
                <div className={footStyle.sectionOne}>
                    <p>Media Center</p>
                    <p>Terms of use</p>
                    <p>Contact us</p>
                    
                </div>
                </div>
            </div>


        </div>
    )
}

export default Footer;