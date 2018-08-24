import React from "react";
import logo from "./img/logo.svg";

/**
 * A simple navbar showing the company's logo
 */
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" target="_self" href="/">
        <img alt="logo" src={logo} />
      </a>
    </nav>
  );
};

export default Navbar;
