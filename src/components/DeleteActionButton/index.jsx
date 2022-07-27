// libs
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
// slices
import { deleteCategorie } from "@/slices/categoriesSlices";
// others
import "./styles.scss";

const DeleteActionButton = ({ record }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="delete-action-button-wrapper"
        onClick={() => dispatch(deleteCategorie(record))}
      >
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default DeleteActionButton;
