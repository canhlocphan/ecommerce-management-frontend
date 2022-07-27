// libs
import React, { useState } from "react";
// components
import HeaderSection from "../../components/HeaderSection";
import AddCategorie from "../../components/AddCategorie";
// others
import "./styles.scss";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="header-wrapper">
      <HeaderSection showModal={showModal} />
      <AddCategorie {...{ isModalVisible, setIsModalVisible }} />
    </div>
  );
};

export default Header;
