import React from "react";
import { NavLink } from "react-router-dom";
import { CgNotifications, CgProfile } from "react-icons/cg";
import { HiOutlineHome } from "react-icons/hi";
import { GiWorld } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import classes from "./MobileNavBar.module.css";
const MobileNavBar = () => {
  return (
    <div className={classes.mobileNavBar}>
      <ul>
        <li>
          <NavLink to="/">
            <HiOutlineHome style={{ marginRight: 5 }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <GiWorld style={{ marginRight: 5 }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <CgNotifications style={{ marginRight: 5 }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <CgProfile style={{ marginRight: 5 }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BiMessageSquareDetail style={{ marginRight: 5 }} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavBar;
