// libs
import React from "react";
import { mainSideMenuList } from "../../../../dataSources/mainSideMenu";
// components
import MenuItem from "../../components/MenuItem";
// others
import "./styles.scss";

const MenuList = () => (
  <div className="menu-list-wrapper">
    {mainSideMenuList.map(({ title }) => (
      <MenuItem key={title} title={title} />
    ))}
  </div>
);

export default MenuList;
