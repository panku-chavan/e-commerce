import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOM-EXPRESS.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; PankajChavan</p>
      </div>

      <div className="rightFooter">
        <h4>Connect Us</h4>
        <a href="https://www.instagram.com/panku_chavan/">Instagram</a>
        
        <a href="https://twitter.com/panku_chavan">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
