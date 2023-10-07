import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About Us</div>
                    <div className="text">
ShopsenseAi is a price comparison website that helps you find the best price on the products you want. We compare prices from some popular apps  so you can be sure you're getting the lowest price and best quality.We also include customer reviews, so you can make an informed decision before you buy.
Thank you
                                  
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Bhubneswar JagmohanNagar,751001
                            
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:9632145870</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email:shopsenceai@gmail.com </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Shoes</span>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        ShopSence 2023.PREMIUM E-COMMERCE

                    </span>
                   
                </div>
            </div>
        </div>
    );
};

export default Footer;