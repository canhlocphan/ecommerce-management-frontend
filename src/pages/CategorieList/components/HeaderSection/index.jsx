// libs
import React from "react";
// components
import HeaderTitle from "@/components/HeaderTitle";
import InsertButton from "../InsertButton";
// others
import "./styles.scss";

const HeaderSection = ({ showModal }) => (
  <div className="header-wrapper-inner">
    <HeaderTitle title="Categorie List" />
    <InsertButton title="Add categories" showModal={showModal} />
  </div>
);

export default HeaderSection;
