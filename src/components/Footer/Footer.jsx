import React from 'react';
import "./Footer.css";
import fb from "../../assets/facebook.png";
import ln from "../../assets/linkedin.png";
import insta from "../../assets/instagram.png";
import x from "../../assets/twitter.png";


const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
        <div className="social-icons">
            <a href="/"> <img className='si' src={ln} alt="" /> </a>
            <a href="/"> <img className='si' src={x} alt="" /> </a>
            <a href="/"> <img className='si' src={insta} alt="" /> </a>
            <a href="/"> <img className='si' src={fb} alt="" /> </a>
        </div>
        <ul className="footer-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Our Work</a></li>
            <li><a href="/">Our Company</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Contact Us</a></li>
        </ul>
        <p className='footer-cr'>© 2024 dummyname All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer