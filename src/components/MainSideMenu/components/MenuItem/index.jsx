// libs
import React from "react";
import {UnorderedListOutlined} from "@ant-design/icons"
// others
import "./styles.scss";

const MenuItem = ({ title }) => (
  <div className="menu-item-wrapper">
    <UnorderedListOutlined />
    <div className="menu-item-inner">{title}</div>
  </div>
);

export default MenuItem;
