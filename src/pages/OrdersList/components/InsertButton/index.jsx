// libs
import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
// others
import "./styles.scss";

const InsertButton = ({ title }) => (
  <div className="insert-button-wrapper">
    <Button
      className="insert-button"
      type="primary"
      icon={<PlusCircleOutlined />}
      size={25}
    >
      {title}
    </Button>
  </div>
);

export default InsertButton;
