import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pinteser_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Vastralaya</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="insta" />
        </div>
        <div className="footer-icon-container">
          <img src={pinteser_icon} alt="insta" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="insta" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
