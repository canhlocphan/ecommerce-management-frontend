// libs
import React from "react";
import { Table } from "antd";
// dataSources
import categorieList from "@/dataSources/categorieList";
import orderListColumn from "@/dataSources/orderListColumn";
// others
import "./styles.scss";

const Body = () => (
  <div className="body-wrapper">
    <Table columns={orderListColumn} dataSource={categorieList} />
  </div>
);

export default Body;
