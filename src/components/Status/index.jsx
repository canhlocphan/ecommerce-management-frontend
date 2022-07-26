// libs
import React from "react";
// others
import "./styles.scss";

const Status = ({ status }) => (
  <span className={status === 1 ? "status-wrapper-inner" : "status-wrapper-inner out"}>
    {status === 0 ? "Out of stock" : "Business"}
  </span>
);

export default Status;
