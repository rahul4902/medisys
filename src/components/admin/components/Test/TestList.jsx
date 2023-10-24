import axios from "axios";
import React, { useState, useEffect } from "react";
import { handleApiResponse } from "../../../../helper/apiHelpers";

import DynamicMuiTable from "../DynamicMuiTable";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../../utils/constants";

function TestList() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   status: "",
  // });
  const [setErrors] = useState({
    name: "",
    status: "",
  });
  const [testData, setTestData] = useState([]);
  const [setIsEditForm] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getTestList();
  }, []);

  const getTestList = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${apiUrl}/admin/test/list`,
      });

      handleApiResponse(
        response,
        (data) => {
          setTestData(data.data);
        },
        (errors) => {},
        setErrors,
        false
      );
    } catch (error) {
      // console.log(error);
      // toast.error("Something went wrong.");
    }
  };

  var columns = [
    { name: "name", label: "Name" },
    { name: "sort_name", label: "Sort Name" },
    { name: "mrp", label: "Mrp Name" },
    { name: "rate", label: "Price Name" },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue, deleteConfirm) => {
          return (
            <div className="status_box">
              {value ? (
                <span className="active status_btn">Active</span>
              ) : (
                <span className="inactive status_btn">Inactive</span>
              )}
            </div>
          );
        },
      },
    },
  ];

  return (
    <div className="row">
      <div className="col-md-12 text-end">
        <div className="col-md-12 col-sm-12 col-12 mb-2">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm common-btn me-2"
          >
            Trash
          </button>
          <Link to="/admin/diagnostic/test/create">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm common-btn me-2"
            >
              Create
            </button>
          </Link>
        </div>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <DynamicMuiTable
          title={"Test List"}
          data={testData}
          columns={columns}
          deleteUrl={`${apiUrl}/admin/test/delete`}
          statusUrl={`${apiUrl}/admin/test/status`}
          editDataUrl={`${apiUrl}/admin/test/getById`}
          refreshTable={getTestList}
          setIsEditForm={setIsEditForm}
          userId={userId}
          setUserId={setUserId}
        />
      </div>
    </div>
  );
}

export default TestList;
