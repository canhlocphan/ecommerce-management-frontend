// libs
import React, { useState } from "react";
import AddCategorie from "../../components/AddCategorie";
// components
import HeaderTitle from "../../components/HeaderTitle";
import InsertButton from "../../components/InsertButton";
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
      <div className="header-wrapper-inner">
        <HeaderTitle title="Categorie List" />
        <InsertButton title="Add categories" onClick={showModal} />
      </div>
      <AddCategorie {...{ isModalVisible, handleOk, handleCancel }} />
    </div>
  );
};

export default Header;
