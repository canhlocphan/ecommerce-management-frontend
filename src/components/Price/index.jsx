// libs
import React from "react";
import NumberFormat from "react-number-format";

const Price = ({ price, suffix = " VND" }) => (
  <NumberFormat
    displayType="text"
    suffix={suffix}
    thousandSeparator
    value={price}
  />
);

export default Price;
