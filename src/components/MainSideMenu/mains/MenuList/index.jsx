// libs
import React from "react";
// hooks
import { useLocaleContext } from "@/hooks/useLocaleContext";
// components
import MenuItem from "../../components/MenuItem";
// dataSources
import mainSideMenuList from "@/dataSources/mainSideMenu";
// others
import "./styles.scss";

const MenuList = () => {
  const { localeDataSource } = useLocaleContext();

  return (
    <div className="menu-list-wrapper">
      {mainSideMenuList({ localeDataSource }).map(({ title, icon, to }) => (
        <MenuItem key={title} {...{ title, icon, to }} />
      ))}
    </div>
  );
};

export default MenuList;
