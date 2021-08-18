import React, { useState } from "react";
import logo1 from "../img/male1.png";
import logo2 from "../img/male.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [logo, setLogo] = useState({
    logo1,
  });
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          <img src={logo.logo1} alt="logo" style={{ maxWidth: "100px" }} />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="/#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="/#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link js-scroll" href="/#work">
                Work
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link js-scroll" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
