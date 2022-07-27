// libs
import React, { useState } from "react";
// components
import AddCategorie from "../../components/AddCategorie";
import HeaderSection from "../../components/HeaderSection";
// others
import "./styles.scss";

const Header = () => {
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
    <div className="header-wrapper">
      <HeaderSection showModal={showModal} />
      <AddCategorie {...{ isModalVisible, handleOk, handleCancel }} />
    </div>
  );
};

export default Header;
