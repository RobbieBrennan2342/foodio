import React from "react";
import NavLinks from "./NavLinks";

import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLinks />
    </div>
  );
};

export default Navbar;
