import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__options">
        <ul>
          <li>Contact me</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
        </ul>
      </div>
      <div className="footer__socialmedia">
        <FacebookIcon className="icons" />
        <InstagramIcon className="icons" />
        <TwitterIcon className="icons" />
        <PinterestIcon className="icons" />
      </div>
      <div className="footer__description">
        <p>@ 2020, MyTshirt My Company</p>
      </div>
      <div className="footer__paymentoption">
        <img
          src="https://www.kindpng.com/picc/m/43-439816_paypal-png-free-image-download-logo-paypal-2019.png"
          alt=""
        />
        <img
          src="https://image.freepik.com/free-icon/visa_318-1586.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
