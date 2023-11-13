import axios from "axios";
import React, { useState, useEffect } from "react";
import { handleApiResponse } from "../../../../helper/apiHelpers";
import MUIDataTable from "mui-datatables";
import { toast } from "react-toastify";

import DynamicMuiTable from "../DynamicMuiTable";
import { apiUrl } from "../../../../utils/constants";

function Department() {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    status: "",
  });
  const [departmentData, setDepartmentData] = useState([]);
  const [isEditFrom, setIsEditForm] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getDepartmentList();
  }, []);

  const options = {
    responsive: "stacked",
  };
  const getDepartmentList = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${apiUrl}/admin/department/list`,
      });

      handleApiResponse(
        response,
        (data) => {
          setDepartmentData(data.data);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);

    try {
      var editUrl;
      var method;
      if (isEditFrom) {
        editUrl = `${apiUrl}/admin/department/update/` + userId;
        method = "put";
      } else {
        editUrl = `${apiUrl}/admin/department/create`;
        method = "post";
      }

      // const response = await axios.post(editUrl, formData);
      const response = await axios({
        method: method,
        url: editUrl,
        data: formData,
      });

      handleApiResponse(
        response,
        (data) => {
          setFormData({
            name: "",
            status: "",
          });
          getDepartmentList();
          setIsEditForm(false);
        },
        (errors) => {
          console.log("errors", errors);
        },
        setErrors
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      // setLoading(false);
    }
  };
  var columns = [
    { name: "name", label: "Name" },
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
      <div className="col-lg-8 col-md-8 col-sm-12 col-12">
        <DynamicMuiTable
          title={"Department List"}
          data={departmentData}
          columns={columns}
          deleteUrl={`${apiUrl}/admin/department/delete`}
          statusUrl={`${apiUrl}/admin/department/status`}
          editDataUrl={`${apiUrl}/admin/department/getById`}
          refreshTable={getDepartmentList}
          setFormData={setFormData}
          setIsEditForm={setIsEditForm}
          userId={userId}
          setUserId={setUserId}
        />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <h4 className="h-title d-flex w-100">
                <svg
                  height="1.25rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="tw-w-5 tw-h-5 tw-text-neutral-500 tw-mr-1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
                <span>{isEditFrom ? "Edit" : "Add"} Department</span>
              </h4>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-100 ic"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors?.name && (
                  <span className="error text-danger fw-bold text-capitalize">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="col-12 mb-2">
                <label>Status</label>
                <select
                  name="status"
                  id="status"
                  className=" form-select  ic"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
                {errors?.status && (
                  <span className="error text-danger fw-bold text-capitalize">
                    {errors.status}
                  </span>
                )}
              </div>
              <div className="col-12 mb-2  text-end">
                <button type="submit" className="btn btn-secondary btn-sm">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
