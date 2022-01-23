import React, { useState } from "react";

import "../Styles/Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={`navbar ${showNav && "show-nav"}`}>
      <div className="navbar__logo">Plastic.</div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <a href="#" className="navbar__link">
            Work.
          </a>
        </li>
        <li className="navbar__item slideInDown-2">
          <a href="#" className="navbar__link">
            About.
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="#" className="navbar__link">
            Manifesto.
          </a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="#" className="navbar__link">
            Contact.
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowNav}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
