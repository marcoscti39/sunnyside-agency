import React from 'react'


import facebookIcon from "../assets/imgs/icons/icon-facebook.svg"
import instagramIcon from "../assets/imgs/icons/icon-instagram.svg"
import twitterIcon from "../assets/imgs/icons/icon-twitter.svg"
import pinterestIcon from "../assets/imgs/icons/icon-pinterest.svg"

import "./style.css"

function Footer() {
    return (
        <footer className="sunnyside-footer">
            <h2 className="sunnyside-footer-title">sunnyside</h2>
            <nav>
                <ul className="footer-list">
                    <li>
                        <a href="#">about</a>

                    </li>
                    <li>
                        <a href="#">services</a>
                    </li>
                    <li>
                        <a href="#">projects</a>
                    </li>
                </ul>
            </nav>

            <div className="footer-social-media">
                <a href="#">
                    <img src={facebookIcon} alt="" />
                </a>
                <a href="#">
                    <img src={instagramIcon} alt="" />
                </a>
                <a href="#">
                    <img src={twitterIcon} alt="" />
                </a>
                <a href="#">
                    <img src={pinterestIcon} alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
