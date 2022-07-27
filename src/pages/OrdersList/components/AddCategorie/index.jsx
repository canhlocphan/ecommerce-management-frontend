// libs
import React, { useState } from "react";
import { Modal } from "antd";
// components
import CategorieForm from "@/components/CategorieForm";

const AddCategorie = ({ isModalVisible, handleOk, handleCancel }) => {
  const [categorie, setCategorie] = useState("");
  const [status, setStatus] = useState("Out of stock");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  return (
    <Modal
      title="Add categorie"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Add"
    >
      <CategorieForm
        {...{
          categorie,
          setCategorie,
          status,
          setStatus,
          price,
          setPrice,
          discount,
          setDiscount,
        }}
      />
    </Modal>
  );
};

export default AddCategorie;
