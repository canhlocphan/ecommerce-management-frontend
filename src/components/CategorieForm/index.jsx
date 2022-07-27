// libs
import React from "react";
import { Form } from "antd";
// components
import PriceInput from "@/components/PriceInput";
import CategorieInput from "./mains/CategorieInput";
import StatusInput from "./mains/StatusInput";
import DiscountInput from "./mains/DiscountInput";

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
    <CategorieInput {...{ categorie, setCategorie }} />
    <StatusInput {...{ status, setStatus }} />
    <Form.Item label="Price" required>
      <PriceInput {...{ price, setPrice }} />
    </Form.Item>
    <DiscountInput {...{ discount, setDiscount }} />
  </Form>
);

export default CategorieForm;
