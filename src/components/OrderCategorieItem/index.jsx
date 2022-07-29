// libs
import React from "react";
import { Col, Row, Tag } from "antd";
// others
import "./styles.scss";

const OrderCategorieItem = ({ categorie, count }) => (
  <Row className="order-categorie-item-wrapper">
    <Col className="order-categorie-item">
      <Tag color="#0d6efd">{categorie}</Tag>
    </Col>
    <Tag color="#20c997">{count}</Tag>
  </Row>
);

export default OrderCategorieItem;
