import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import {FiMail} from "react-icons/fi"
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Get Updates</span>
                <span className="big-text">
                   Connect With Our Community
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                   {/* <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div> */}
                    <a href="https://www." className="icon">
                        <FaInstagram size={14} />
                    </a>
                    <a href="mailto:shopsenceai@gmail.com" className="icon">
                        <FiMail size={14} />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;