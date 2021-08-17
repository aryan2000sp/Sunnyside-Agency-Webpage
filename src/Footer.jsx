import React from "react";
import logo from "./images/logo-footer.svg";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Instagram } from "./images/icon-instagram.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="footer flex flex-jc-c">
      <section className="footer-content">
        {/* This is the title div */}
        <div className="footer-title">
          <img src={logo} alt="logo" />
        </div>

        {/* This is the Links div */}
        <div className="footer-links flex flex-jc-sb">
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Projects</a>
        </div>

        {/* This is the div for social media links with their icons */}
        <div className="footer-social-media flex flex-jc-sa">
          <Facebook />
          <Instagram />
          <Twitter />
          <Pinterest />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
