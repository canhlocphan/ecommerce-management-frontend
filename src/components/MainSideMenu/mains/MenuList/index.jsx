// libs
import React from "react";
// components
import MenuItem from "../../components/MenuItem";
// dataSources
import mainSideMenuList from "../../../../dataSources/mainSideMenu";
// others
import "./styles.scss";

const MenuList = () => (
  <div className="menu-list-wrapper">
    {mainSideMenuList.map(({ title, icon }) => (
      <MenuItem key={title} {...{title,icon}} />
    ))}
  </div>
);

export default MenuList;
