// libs
import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const InsertButton = ({ title, showModal }) => (
  <Button
    type="primary"
    icon={<PlusCircleOutlined />}
    size={25}
    onClick={showModal}
  >
    {title}
  </Button>
);

export default InsertButton;
