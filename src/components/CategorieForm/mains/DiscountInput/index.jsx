// libs
import React from "react";
import { Form, Input } from "antd";

const DiscountInput = ({ discount, setDiscount }) => (
  <Form.Item label="Discount" required>
    <Input
      value={discount}
      addonAfter="%"
      onChange={(e) => {
        setDiscount(e.target.value);
      }}
    />
  </Form.Item>
);

export default DiscountInput;
