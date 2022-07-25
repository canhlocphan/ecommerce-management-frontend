// libs
import React from "react";
// components
import MenuList from "./mains/MenuList";
// others
import "./styles.scss";

const MainSideMenu = () => (
  <div className="main-side-menu-wrapper">
    <div className="main-side-menu-wrapper-inner">
      <MenuList />
    </div>
  </div>
);

export default MainSideMenu;
