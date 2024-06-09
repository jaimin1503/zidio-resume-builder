import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleClick = () => {
    setTimeout(() => {
      setIsCollapsed((prevState) => !prevState);
    }, 200);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand heading" href="#">
          ProResumeHub
        </a>
        <button
          id="navbar-toggler"
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isCollapsed}
          aria-label="Toggle navigation"
          onClick={handleToggleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link litems" aria-current="page" href="/resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link litems" href="/coverletter">
                Cover Letter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link litems" href="/carreradvice">
                Career Advice
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link litems" href="/atscheck">
                ATS Check
              </a>
            </li>
          </ul>
          <button className="btn signup" type="button">
            Sign Up
          </button>
          <button className="btn login" type="button">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
