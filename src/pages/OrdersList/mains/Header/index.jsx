// libs
import React from "react";
// components
import HeaderTitle from "../../components/HeaderTitle";
import InsertButton from "../../components/InsertButton";
// others
import "./styles.scss";

const Header = () => (
  <div className="header-wrapper">
    <div className="header-wrapper-inner">
      <HeaderTitle title="Categorie List" />
      <InsertButton title="Add categories" />
    </div>
  </div>
);

export default Header;
