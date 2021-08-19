import React, { useState } from "react";
import logo1 from "../img/male1.png";
import me from "../img/me.JPG";
import hng from "../img/hngLogo.jpg";
import logo2 from "../img/male.png";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [logo, setLogo] = useState({
    logo1,
    me,
    hng,
  });
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          <img
            src={logo.hng}
            alt="logo"
            style={{ maxWidth: "120px", borderRadius: "50%", margin: "0 auto" }}
          />
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
