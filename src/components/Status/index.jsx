// libs
import React from "react";
// others
import "./styles.scss";

const Status = ({ status }) => (
  <span
    className={
      status === "Business"
        ? "status-wrapper-inner"
        : "status-wrapper-inner out"
    }
  >
    {status}
  </span>
);

export default Status;
