// libs
import { Col, Row } from "antd";
import React from "react";
// components
import OrderCategorieItem from "../OrderCategorieItem";

const Category = ({ categories }) => (
  <>
    <Row className="order-categorie-item-wrapper">
      <Col style={{ width: "120px" }} color="#0d6efd">
        Name
      </Col>
      <Col color="#20c997">No.</Col>
    </Row>
    {categories.map(({ categorie, count }) => (
      <OrderCategorieItem key={Math.random()} {...{ categorie, count }} />
    ))}
  </>
);

export default Category;
