// libs
import React, { useState } from "react";
import { FormOutlined } from "@ant-design/icons";
// components
import EditCategorie from "@/pages/OrdersList/components/EditCategorie";
// others
import "./styles.scss";

const EditActionButton = ({ record }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="edit-action-button-wrapper" onClick={showModal}>
        <FormOutlined />
      </div>
      <EditCategorie {...{ isModalVisible, handleOk, handleCancel, record }} />
    </>
  );
};

export default EditActionButton;
