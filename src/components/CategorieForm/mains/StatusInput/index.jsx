// libs
import React from "react";
import { Form, Select } from "antd";

const StatusInput = ({ status, setStatus }) => (
  <Form.Item label="Status" required>
    <Select
      defaultValue={status}
      onChange={(value) => {
        setStatus(value);
      }}
    >
      <Select.Option value="business">Business</Select.Option>
      <Select.Option value="out">Out of stock</Select.Option>
    </Select>
  </Form.Item>
);

export default StatusInput;
