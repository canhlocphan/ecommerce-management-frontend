// libs
import React from "react";
// components
import OrderListHeader from "./mains/OrderListHeader";
import OrderListContent from "./mains/OrderListContent";
// others
import "./styles.scss";

const OrderList = () => (
  <div className="order-list-wrapper">
    <OrderListHeader />
    <OrderListContent />
  </div>
);

export default OrderList;
