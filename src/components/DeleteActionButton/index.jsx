// libs
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Popconfirm } from "antd";
// slices
import { deleteCategorie } from "@/slices/categoriesSlices";
// others
import "./styles.scss";

const DeleteActionButton = ({ record }) => {
  const dispatch = useDispatch();
  return (
    <Popconfirm
      placement="bottom"
      title="Are you sure you want to delete item?"
      onConfirm={() => dispatch(deleteCategorie(record))}
      okText="Yes"
      cancelText="No"
    >
      <div className="delete-action-button-wrapper">
        <DeleteOutlined />
      </div>
    </Popconfirm>
  );
};

export default DeleteActionButton;
