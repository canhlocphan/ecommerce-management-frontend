// components
import Status from "../components/Status";
import Price from "../components/Price";
import EditActionButton from "../components/EditActionButton";
import DeleteActionButton from "../components/DeleteActionButton";

const orderListColumn = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "CATEGORIE",
    dataIndex: "categorie",
    key: "categorie",
    render: (text) => <div style={{ fontWeight: "bold" }}>{text}</div>,
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
    render: (status) => <Status status={status} />,
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price,
    render: (price) => <Price price={price} />,
  },
  {
    title: "DISCOUNT",
    key: "discount",
    dataIndex: "discount",
    sorter: (a, b) => a.discount - b.discount,
    render: (discount) => <Price price={discount} suffix="%" />,
  },
  {
    title: "ACTION",
    key: "action",
    render: (_, record) => (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <EditActionButton record={record} />
        <DeleteActionButton record={record} />
      </div>
    ),
  },
]

export default orderListColumn;