// libs
import React from "react";
import { Table } from "antd";
// dataSources
import ordersColumn from "@/dataSources/ordersColumn";
import orderList from "@/dataSources/orderList";
// others
import "./styles.scss";

const OrderListContent = () => (
  <div className="order-list-content-wrapper">
    <Table
      columns={ordersColumn}
      dataSource={orderList}
      pagination={{ pageSize: 10 }}
    />
  </div>
);

export default OrderListContent;
