// libs
import React from "react";
import { Form, Input } from "antd";

const CategorieInput = ({ categorie, setCategorie }) => (
  <Form.Item label="Categorie" required>
    <Input
      value={categorie}
      onChange={(e) => {
        setCategorie(e.target.value);
      }}
    />
  </Form.Item>
);

export default CategorieInput;
