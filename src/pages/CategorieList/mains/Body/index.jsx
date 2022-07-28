// libs
import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
// dataSources
import orderListColumn from "@/dataSources/orderListColumn";
// slices
import { categories } from "@/slices/categoriesSlices";
// others
import "./styles.scss";

const Body = () => {
  const categorieList = useSelector(categories);

  return (
    <div className="body-wrapper">
      <Table
        columns={orderListColumn}
        dataSource={categorieList}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Body;
