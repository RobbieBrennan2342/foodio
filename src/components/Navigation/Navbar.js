import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import MobileNavBar from "../mobile/MobileNavBar";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
