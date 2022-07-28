// libs
import React from "react";
import { NavLink } from "react-router-dom";
// others
import "./styles.scss";

const MenuItem = ({ title, icon, to }) => {
  const navLinkClass = ({ isActive }) =>
    isActive ? "menu-item-wrapper activated" : "menu-item-wrapper";

  return (
    <NavLink to={to} className={navLinkClass}>
      <div className="menu-item-icon-wrapper">{icon}</div>
      <div className="menu-item-title">{title}</div>
    </NavLink>
  );
};

export default MenuItem;
