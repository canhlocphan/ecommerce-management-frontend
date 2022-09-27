// libs
import { NavLink } from "react-router-dom";
// components
import Status from "../components/Status";
import Price from "../components/Price";
import Category from "@/components/Category";

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
    render: (_, { categories }) => <Category categories={categories} />
  },
  {
    title: "CUSTOMER NAME",
    dataIndex: "customer",
    key: "customer",
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
    dataIndex: "date",
  },
  {
    title: "PAYMENT INFO",
    key: "payment",
    dataIndex: "payment",
  },
  {
    title: "TOTAL PRICE",
    dataIndex: "total",
    key: "total",
    sorter: (a, b) => a.total - b.total,
    render: (price) => <Price price={price} />,
  },
  {
    title: "ACTION",
    dataIndex: "action",
    key: "action",
    render: (action) => (
      <NavLink to={action}>
        <div>Details</div>
      </NavLink>
    ),
  },
];

export default ordersColumn;
