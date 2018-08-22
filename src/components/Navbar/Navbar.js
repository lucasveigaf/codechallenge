import React from "react";
import logo from "./img/logo.svg";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" target="_self" href="/">
        <img alt="logo" src={logo} />
      </a>
    </nav>
  );
};

export default Navbar;
