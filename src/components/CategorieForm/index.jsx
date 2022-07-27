// libs
import React from "react";
import { Form, Input, Select } from "antd";
// components
import PriceInput from "@/components/PriceInput";

const CategorieForm = ({
  categorie,
  setCategorie,
  status,
  setStatus,
  price,
  setPrice,
  discount,
  setDiscount,
}) => (
  <Form labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}>
    <Form.Item label="Categorie" required>
      <Input
        value={categorie}
        onChange={(e) => {
          setCategorie(e.target.value);
        }}
      />
    </Form.Item>
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
    <Form.Item label="Price" required>
      <PriceInput {...{ price, setPrice }} />
    </Form.Item>
    <Form.Item label="Discount" required>
      <Input
        value={discount}
        addonAfter="%"
        onChange={(e) => {
          setDiscount(e.target.value);
        }}
      />
    </Form.Item>
  </Form>
);

export default CategorieForm;
