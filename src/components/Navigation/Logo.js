import React from "react";
import { NavLink } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={classes.logoDiv}>
      <MdFastfood style={{ marginRight: 5 }} />
      <NavLink to="/">Foodio</NavLink>
    </div>
  );
};

export default Logo;
