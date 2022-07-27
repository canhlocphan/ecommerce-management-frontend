// libs
import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const InsertButton = ({ title, onClick }) => (
  <Button
    type="primary"
    icon={<PlusCircleOutlined />}
    size={25}
    onClick={onClick}
  >
    {title}
  </Button>
);

export default InsertButton;
