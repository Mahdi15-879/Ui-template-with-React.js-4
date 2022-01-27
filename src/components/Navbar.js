import React, { useState } from "react";

import "../Styles/Navbar.css";

const Navbar = ({ onView }) => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={`navbar ${showNav && "show-nav"} ${onView && "navOnView"}`}>
      <div className="navbar__logo">Plastic.</div>
      <div className="navbar__links">
        <ul>
          <li className="navbar__item slideInDown-1">
            <a href="#" className="navbar__link">
              <span>01.</span> Work.
            </a>
          </li>
          <li className="navbar__item slideInDown-2">
            <a href="#" className="navbar__link">
              <span>02.</span> About.
            </a>
          </li>
          <li className="navbar__item slideInDown-3">
            <a href="#" className="navbar__link">
              <span>03.</span> Manifesto.
            </a>
          </li>
          <li className="navbar__item slideInDown-4">
            <a href="#" className="navbar__link">
              <span>04.</span> Contact.
            </a>
          </li>
        </ul>

        <ul>
          <li className="navbar__item slideInDown-1">
            <a href="#" className="navbar__link">
              Behance.
            </a>
          </li>
          <li className="navbar__item slideInDown-2">
            <a href="#" className="navbar__link">
              Dribbble.
            </a>
          </li>
          <li className="navbar__item slideInDown-3">
            <a href="#" className="navbar__link">
              Instagram.
            </a>
          </li>
          <li className="navbar__item slideInDown-4">
            <a href="#" className="navbar__link">
              Linkedin.
            </a>
          </li>
          <li className="navbar__item slideInDown-5">
            <a href="#" className="navbar__link">
              Medium.
            </a>
          </li>
          <li className="navbar__item slideInDown-6">
            <a href="#" className="navbar__link">
              Twitter.
            </a>
          </li>
        </ul>
      </div>
      <button className="navbar__burger" onClick={handleShowNav}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
