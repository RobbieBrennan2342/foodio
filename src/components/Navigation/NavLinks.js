import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { GiWorld, GiBookmarklet } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CgNotifications, CgProfile } from "react-icons/cg";

import classes from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={classes.Navlinkslist}>
      <div className={classes.btn}>
        <li>
          <HiOutlineHome style={{ marginRight: 5 }} />
          <NavLink to="/">Home</NavLink>
        </li>
      </div>
      <div className={classes.btn}>
        <li>
          <GiWorld style={{ marginRight: 5 }} />
          <NavLink to="/explore">Explore</NavLink>
        </li>
      </div>
      <div className={classes.btn}>
        <li>
          <CgNotifications style={{ marginRight: 5 }} />
          <NavLink to="/notifications">Notifications</NavLink>
        </li>
      </div>
      <div className={classes.btn}>
        <li>
          <BiMessageSquareDetail style={{ marginRight: 5 }} />
          <NavLink to="/messages">Messages</NavLink>
        </li>
      </div>
      <div className={classes.btn}>
        <li>
          <GiBookmarklet style={{ marginRight: 5 }} />
          <NavLink to="/bookmarks">Bookmarks</NavLink>
        </li>
      </div>
      <div className={classes.btn}>
        <li>
          <CgProfile style={{ marginRight: 5 }} />
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </div>
    </ul>
  );
};

export default NavLinks;
