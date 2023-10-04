import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import EditIcon from "../../../assets/images/icons/svg/EditIcon";
import DeleteIcon from "../../../assets/images/icons/svg/DeleteIcon";
import CheckIcon from "../../../assets/images/icons/svg/CheckIcon";
import DisabledIcon from "../../../assets/images/icons/svg/DisabledIcon";
import ConfirmDialog from "./ConfirmDialog";
import axios from "axios";
import { handleApiResponse } from "../../../helper/apiHelpers";
import { toast } from "react-toastify";

const DynamicMuiTable = ({
  title,
  columns,
  data,
  deleteUrl,
  statusUrl,
  editDataUrl,
  refreshTable,
  setFormData,
  setIsEditForm,
  userId,
  setUserId,
}) => {
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [statusConfirm, setStatusConfirm] = useState(false);
  const options = {
    selectableRows: "none",
    responsive: "standard",
  };
  function deleteIdToState(value) {
    setDeleteConfirm(true);
    setUserId(value);
  }
  function statusIdToState(value) {
    setStatusConfirm(true);
    setUserId(value);
  }
  function handleEditClick(value) {
    setUserId(value);
    getEditDataAPI(editDataUrl + `/${value}`);
  }

  const columnsMain = [
    {
      name: "id",
      label: "Action",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="table_btns">
              <button
                className="action_btn"
                title="Edit"
                onClick={() => {
                  handleEditClick(value);
                }}
              >
                <EditIcon />
              </button>
              <button
                className="action_btn"
                title="Delete"
                onClick={() => {
                  deleteIdToState(value);
                }}
              >
                <DeleteIcon />
              </button>
              {tableMeta.rowData[1] ? (
                <button
                  className="action_btn"
                  title="Active"
                  onClick={() => {
                    statusIdToState(value);
                  }}
                >
                  <CheckIcon />
                </button>
              ) : (
                <button
                  className="action_btn"
                  title="Inactive"
                  onClick={() => {
                    statusIdToState(value);
                  }}
                >
                  <DisabledIcon />
                </button>
              )}
            </div>
          );
        },
      },
    },
  ];
  var columArray = [...columns, ...columnsMain];
  const onCancel = () => {
    setDeleteConfirm(false);
  };
  const onStatusCancel = () => {
    setStatusConfirm(false);
  };

  const onConfirm = async () => {
    await deleteAPI(deleteUrl + `/${userId}`);
    setDeleteConfirm(false);
    refreshTable();
  };

  const onStatusConfirm = async () => {
    await statusAPI(statusUrl + `/${userId}`);
    setStatusConfirm(false);
    refreshTable();
  };

  const statusAPI = async (url) => {
    try {
      const response = await axios({
        method: "patch",
        url: url,
      });

      handleApiResponse(
        response,
        (data) => {},
        (errors) => {}
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };
  const deleteAPI = async (url) => {
    try {
      const response = await axios({
        method: "delete",
        url: url,
      });

      handleApiResponse(
        response,
        (data) => {},
        (errors) => {}
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const getEditDataAPI = async (url) => {
    try {
      const response = await axios({
        method: "get",
        url: url,
      });

      handleApiResponse(
        response,
        (data) => {
          setFormData(data.data);
          setIsEditForm(true);
        },
        (errors) => {},
        false,
        false
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      {deleteConfirm && (
        <ConfirmDialog
          message={"Are You Sure?."}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}

      {statusConfirm && (
        <ConfirmDialog
          message={"Are You Sure?."}
          onCancel={onStatusCancel}
          onConfirm={onStatusConfirm}
        />
      )}

      <div className="miuiTable">
        <MUIDataTable
          title={title}
          data={data}
          columns={columArray}
          options={options}
        />
      </div>
    </>
  );
};

export default DynamicMuiTable;
