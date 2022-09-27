// libs
import React from "react";
// components
import OrderDetailsHeader from "./mains/OrderDetailsHeader";
// hooks
import useRouter from "@/hooks/useRouter";
// dataSources
import orderList from "@/dataSources/orderList";
// others
import "./styles.scss";

const OrderDetails = () => {
  const router = useRouter();
  const id = router.query?.id;
  const orderDetails = orderList.find(({ key }) => key === id);
  // eslint-disable-next-line no-console
  console.log(orderDetails);

  return (
    <div className="order-details-wrapper">
      <OrderDetailsHeader />
    </div>
  );
};

export default OrderDetails;
