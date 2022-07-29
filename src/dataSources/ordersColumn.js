// libs
import { Col, Row } from "antd";
// components
import Status from "../components/Status";
import Price from "../components/Price";
import OrderCategorieItem from "@/components/OrderCategorieItem";

const ordersColumn = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "CATEGORIES",
    dataIndex: "categories",
    key: "categories",
    render: (_, { categories }) => (
      <>
        <Row className="order-categorie-item-wrapper">
          <Col style={{ width: "120px" }} color="#0d6efd">Name</Col>
          <Col color="#20c997">No.</Col>
        </Row>
        {categories.map(({ categorie, count }) =>
        (
          <OrderCategorieItem key={Math.random()} {...{ categorie, count }} />
        )
        )}
      </>
    ),
  },
  {
    title: "CUSTOMER NAME",
    dataIndex: "customer",
    key: "customer"
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
    render: (status) => <Status status={status} />,
  },
  {
    title: "DATE",
    key: "date",
    dataIndex: "date"
  },
  {
    title: "PAYMENT INFO",
    key: "payment",
    dataIndex: "payment"
  },
  {
    title: "TOTAL PRICE",
    dataIndex: "total",
    key: "total",
    sorter: (a, b) => a.total - b.total,
    render: (price) => <Price price={price} />,
  }
]

export default ordersColumn;