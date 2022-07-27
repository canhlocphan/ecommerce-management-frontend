// libs
import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
// components
import CategorieForm from "@/components/CategorieForm";
// slices
import { addCategorie } from "@/slices/categoriesSlices";

const AddCategorie = ({ isModalVisible, setIsModalVisible }) => {
  const [categorie, setCategorie] = useState("");
  const [status, setStatus] = useState("Out of stock");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const dispatch = useDispatch();

  const handleOk = () => {
    // TODO: BE repone ID auto increase and key random
    dispatch(
      addCategorie({
        key: Math.random(),
        id: `#${Math.floor(Math.random() * 10000) + 1000}`,
        categorie,
        status,
        price,
        discount,
      })
    );
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
