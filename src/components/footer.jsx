import React from "react";
import Gdsc from "../assets/header icon.svg";
import Insta from "../assets/Instagram.svg";
import Linkendin from "../assets/LinkedIn (1).svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-1">
        <div className="footer-logo">
          <img src={Gdsc} alt="gdsc" />
        </div>
        <h1 className="social">Socials</h1>
        <div className="social-links">
          <a href="https://www.instagram.com/gdscviit/">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/gdscviit">
            <img src={Linkendin} alt="Linkedin" />
          </a>
        </div>
      </div>
      <div className="footer-2">
        <div className="footer-text">
          <h1>© GDSC-VIIT</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
