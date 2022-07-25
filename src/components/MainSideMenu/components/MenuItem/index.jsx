// libs
import React from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
// others
import "./styles.scss";

const MenuItem = ({ title }) => (
  <div className="menu-item-wrapper">
    <div className="menu-item-icon-wrapper">
      <UnorderedListOutlined className="menu-item-icon"/>
    </div>
    <div className="menu-item-title">{title}</div>
  </div>
);

export default MenuItem;
