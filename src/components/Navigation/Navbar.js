import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import PostBtn from "../UI/PostBtn";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Logo />
      <NavLinks />
      <PostBtn name="Post" />
    </nav>
  );
};

export default Navbar;
