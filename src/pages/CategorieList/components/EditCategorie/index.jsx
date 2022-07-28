// libs
import React, { useState } from "react";
import { Modal } from "antd";
// components
import CategorieForm from "@/components/CategorieForm";

const EditCategorie = ({ isModalVisible, handleOk, handleCancel, record }) => {
  const [categorie, setCategorie] = useState(record.categorie);
  const [status, setStatus] = useState(record.status);
  const [price, setPrice] = useState(record.price);
  const [discount, setDiscount] = useState(record.discount);

  return (
    <Modal
      title="Edit categorie"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
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

export default EditCategorie;
