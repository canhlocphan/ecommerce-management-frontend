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
      <Select.Option value="Business">Business</Select.Option>
      <Select.Option value="Out of stock">Out of stock</Select.Option>
    </Select>
  </Form.Item>
);

export default StatusInput;
