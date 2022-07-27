// libs
import React from "react";
import { Form, InputNumber } from "antd";

const DiscountInput = ({ discount, setDiscount }) => (
  <Form.Item label="Discount" required>
    <InputNumber
      style={{ width: "100%" }}
      defaultValue={discount}
      controls={false}
      addonAfter="%"
      onChange={(value) => { 
        setDiscount(value);
      }}
    />
  </Form.Item>
);

export default DiscountInput;
