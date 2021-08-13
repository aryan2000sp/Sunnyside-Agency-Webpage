import React from "react";
import hambergerIcon from "./images/icon-hamburger.svg";
import logo from "./images/logo.svg";
import arrow from "./images/icon-arrow-down.svg";
import { useState } from "react";
// import image from "./images/mobile/image-header.jpg";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="header">
      {/* The navigation bar of the page */}
      <nav className="header-nav flex flex-jc-sb flex-ai-c">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>

        {/* The hamberger icon svg */}
        <img
          src={hambergerIcon}
          className="hamburger-icon"
          alt="hambergerIcon"
          onClick={() => setShow(!show)}
        />

        {/* This the navigation links for the page */}
        <ul className="header-links flex flex-ai-c">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>

          <button>Contact</button>
        </ul>
      </nav>

      {/* The main heading of the  header*/}
      <div className="header-title">
        <h1>WE ARE CREATIVES</h1>
      </div>

      {/* This is the arrow-icon svg */}
      <div className="header-arrow flex flex-jc-c flex-ai-c">
        <img src={arrow} alt="arrow-down" />
      </div>

      {/* This the popup navbar for mobile view */}
      {show && <PopupNav />}
    </header>
  );
};

const PopupNav = () => {
  return (
    <article className="header-popup-nav flex-col-jc-c">
      <div className="item">
        <a href="/">About</a>
      </div>
      <div className="item">
        <a href="/">Services</a>
      </div>
      <div className="item">
        <a href="/">Projects</a>
      </div>

      <button>CONTACT</button>
    </article>
  );
};

export default Header;
