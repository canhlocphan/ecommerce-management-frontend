const orderList = [
  {
    key: "1",
    id: "#0001",
    categories: [{ categorie: "Ốc bưu", count: 1 }, { categorie: "Ốc hút", count: 2 }],
    customer: "Lộc",
    status: "Paid",
    date: "March 13, 2021",
    payment: "Momo",
    total: 30000,
  },
  {
    key: "2",
    id: "#0002",
    categories: [{ categorie: "Ốc cà na", count: 2 }],
    customer: "Cảnh Lộc",
    status: "Paid",
    date: "March 13, 2021",
    payment: "Cash",
    total: 40000,
  },
  {
    key: "3",
    id: "#0003",
    categories: [{ categorie: "Ốc hương", count: 2 }, { categorie: "Ốc bưu", count: 3 }],
    customer: "Phan Cảnh Lộc",
    status: "Unpaid",
    date: "March 14, 2022",
    payment: "N/A",
    total: 50000,
  },
];

export default orderList;
