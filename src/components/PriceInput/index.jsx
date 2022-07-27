// libs
import React from "react";
import { InputNumber } from "antd";

const PriceInput = ({ price, setPrice }) => (
  <InputNumber
    style={{ width: "100%" }}
    defaultValue={price}
    controls={false}
    addonAfter="VND"
    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
    onChange={(value) => {
      setPrice(value);
    }}
  />
);

export default PriceInput;
