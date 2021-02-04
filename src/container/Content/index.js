import React from 'react';
import Faq from '../../components/Faq';
import conStyle from "./style/Content.module.css";



const Content = () => {
    return (
        <div>
        <div className={conStyle.sub}>
            <div className={conStyle.section}>
                <div className={conStyle.col}>
                    <h1>Enjoy on Your Tv</h1>
                    <p>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
                </div>
                <div className={conStyle.col}>

                    <img src="/static/img/tv.png" className={conStyle.tvImage} />
                    <video className={conStyle.tvVideo}>
                        <source src="/static/img/video-tv-0819.m4v"/>
                    </video>
                </div>
            </div>
            <div className={conStyle.section}>
                <div className={conStyle.col}>
                    <img src="/static/img/section2Image.jpg" className={conStyle.section2Image} />
                    <div className={conStyle.downloadPopup}>
                        <img className={conStyle.downloadBanner} src="/static/img/downloadMovieImage.png"/>
                        <div className={conStyle.downloadTextBox}>
                            <h5>Stranger Things</h5>
                            <p>Downloading...</p>
                        </div>
                        <img className={conStyle.downloadIcon} src="/static/img/download.gif" />
                    </div>
                </div>
                <div className={conStyle.col}>
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
            
        </div>
        <Faq />
        </div>
    )
}

export default Content;