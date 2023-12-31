import React, { useEffect, useState } from "react";
import axios from "axios";
import { handleApiResponse } from "../../../../helper/apiHelpers";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../../utils/constants";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function Test() {
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [saveLoader, setSaveLoader] = useState(false);
  const [isEditFrom, setIsEditForm] = useState(false);
  const [userId] = useState(null);
  const [rows, setRows] = useState([]);

  const [formData, setFormData] = useState({
    department: "",
    rows: [{ name: "", description: "" }],
    what_description:"",
    instructions:"",
    category: "",
    name: "",
    code: "",
    gender: "B",
    color_code: "",
    type: "R",
    sample_qty: "1",
    remark: "",
    report_type: "1",
    sort_name: "",
    mrp: "",
    auto_consume: "0",
    concent_form: "",
    billing_category: "",
    max_discount: "",
    reporting: "",
    is_sample_name: "",
    is_booking: "",
    is_name_in_report: "",
    is_name_in_analysis: "",
    is_auto_store: "",
    urgent: "",
    print_seprate: "",
    is_organism: "",
    is_culture_report: "",
    is_mic: "",
    set_prot_target: "",
    ht_wt_lmp_group: "",
  });
  const [errors, setErrors] = useState({
    department: "",
    category: "",
    name: "",
    code: "",
    gender: "",
    color_code: "",
    type: "",
    sample_qty: "",
    remark: "",
    report_type: "",
    sort_name: "",
    mrp: "",
    auto_consume: "",
    concent_form: "",
    billing_category: "",
    max_discount: "",

    reporting: "",
    is_sample_name: "",
    is_booking: "",
    is_name_in_report: "",
    is_name_in_analysis: "",
    is_auto_store: "",
    urgent: "",
    print_seprate: "",
    is_organism: "",
    is_culture_report: "",
    is_mic: "",
    set_prot_target: "",
    ht_wt_lmp_group: "",
  });

  useEffect(() => {
    getDepartmentList();
    getCategoryList();
  }, []);

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
      setSaveLoader(true);
      var editUrl;
      var method;
      if (isEditFrom) {
        method = "put";
        editUrl = `${apiUrl}/admin/test/update/` + userId;
      } else {
        method = "post";
        editUrl = `${apiUrl}/admin/test/create`;
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
            department: "",
            name: "",
            code: "",
            gender: "",
            color_code: "",
            type: "",
            sample_qty: "",
            remark: "",
            report_type: "",
            sort_name: "",
            mrp: "",
            auto_consume: "",
            concent_form: "",
            billing_category: "",
            max_discount: "",
            reporting: "",
            is_sample_name: "",
            is_booking: "",
            is_name_in_report: "",
            is_name_in_analysis: "",
            is_auto_store: "",
            urgent: "",
            print_seprate: "",
            is_organism: "",
            is_culture_report: "",
            is_mic: "",
            set_prot_target: "",
            ht_wt_lmp_group: "",
          });
          setIsEditForm(false);
        },
        (errors) => {
          console.log("errors", errors);
        },
        setErrors
      );
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setSaveLoader(false);
    }
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
          setDepartments(data.data);
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
  const getCategoryList = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${apiUrl}/admin/category/list`,
      });

      handleApiResponse(
        response,
        (data) => {
          setCategories(data.data);
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

  const handleInstructionChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prevData) => ({
      ...prevData,
      instructions: data,
    }));
  };
  const handleWhatDescriptoinChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prevData) => ({
      ...prevData,
      what_description: data,
    }));
  };

  const handleAddRow = () => {
    setRows([...rows, { name: "", description: "" }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handlePerametersInputChange = (index, event) => {
    const updatedRows = [...formData.rows];
    updatedRows[index] = {
      ...updatedRows[index],
      [event.target.name]: event.target.value,
    };
    setFormData({
      ...formData,
      rows: updatedRows,
    });
    setRows(updatedRows);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-end">
        <div className="col-md-12 col-sm-12 col-12 mb-2">
          <button
            type="button"
            className="btn btn-outline-secondary common-btn me-2"
          >
            Trash
          </button>
          <Link to="/admin/diagnostic/test/">
            <button
              type="button"
              className="btn btn-outline-secondary common-btn me-2"
            >
              List
            </button>
          </Link>
          <button
            type="submit"
            className="btn btn-outline-secondary common-btn"
          >
            {saveLoader && (
              <div
                className="spinner-border spinner-border-sm me-1"
                role="status"
              >
                <span className="sr-only"></span>
              </div>
            )}
            <span>Save</span>
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h5 className="card-collapse-head">Diagnostic Tests</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label>Department</label>
              <select
                name="department"
                className="ic form-select"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                {departments.map((v, _dk) => {
                  return (
                    <option value={v.id} key={_dk}>
                      {v.name}
                    </option>
                  );
                })}
              </select>
              {errors?.department && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.department}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label>Category</label>
              <select
                name="category"
                className="ic form-select"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                {categories.map((v, _dk) => {
                  return (
                    <option value={v.id} key={_dk}>
                      {v.name}
                    </option>
                  );
                })}
              </select>
              {errors?.department && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.department}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Test Name:</label>
              <input
                name="name"
                type="text"
                className="ic"
                value={formData.name}
                onChange={handleChange}
              />
              {errors?.name && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Test Code:</label>
              <input
                name="code"
                type="text"
                className="ic"
                value={formData.code}
                onChange={handleChange}
              />
              {errors?.code && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.code}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Gender :</label>
              <select
                className="ic form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Gender </option>
                <option value="B">Both</option>
                <option value="M">Male</option>
                <option value="F">female</option>
              </select>
              {errors?.gender && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.gender}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag2">Container Color Code :</label>
              <select
                className="ic form-select"
                name="color_code"
                value={formData.color_code}
                onChange={handleChange}
              >
                <option value="">Select Color Code</option>
                <option value="#FF0000">Red</option>
                <option value="#00BFFF">Blue</option>
                <option value="#7FFF00">Green</option>
                <option value="#FFFF00">Yellow</option>
                <option value="#000000">Black</option>
                <option value="#FFFFFF">White</option>
                <option value="#FF8C00">Orange</option>
                <option value="#8B008B">Purple</option>
                <option value="#708090">Gray</option>
              </select>
              {errors?.color_code && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.color_code}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Type :</label>
              <select
                className="ic form-select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="R">Sample Required</option>
                <option value="N">Sample Not Required</option>
                <option value="S">Segregation Required</option>
              </select>
              {errors?.type && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.type}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label>Sample Qty:</label>
              <input
                name="sample_qty"
                type="text"
                className="ic"
                value={formData.sample_qty}
                onChange={handleChange}
              />
              {errors?.sample_qty && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.sample_qty}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="hide">Sample Remarks:</label>
              <input
                name="remark"
                type="text"
                className="ic"
                value={formData.remark}
                onChange={handleChange}
              />
              {errors?.remark && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.remark}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Report Type :</label>
              <select
                className="ic form-select"
                name="report_type"
                value={formData.report_type}
                onChange={handleChange}
              >
                <option value="">Select Report Type</option>
                <option value="1">Path Numeric</option>
                <option value="3">Path RichText</option>
                <option value="5">Radiology </option>
              </select>
              {errors?.report_type && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.report_type}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag2">Short Name :</label>
              <input
                name="sort_name"
                type="text"
                className="ic"
                value={formData.sort_name}
                onChange={handleChange}
              />
              {errors?.sort_name && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.sort_name}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">MRP :</label>
              <input
                name="mrp"
                type="text"
                className="ic"
                value={formData.mrp}
                onChange={handleChange}
              />
              {errors?.mrp && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.mrp}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Rate :</label>
              <input
                name="rate"
                type="text"
                className="ic"
                value={formData.rate}
                onChange={handleChange}
              />
              {errors?.rate && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.rate}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">AutoConsume :</label>
              <select
                className="ic form-select"
                name="auto_consume"
                value={formData.auto_consume}
                onChange={handleChange}
              >
                <option value="">Select Auto Consume</option>
                <option value="0">No</option>
                <option value="1">Investigation Wise</option>
                <option value="2">Observation Wise</option>
              </select>
              {errors?.auto_consume && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.auto_consume}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Concent Form: </label>
              <select
                className="ic form-select"
                name="concent_form"
                value={formData.concent_form}
                onChange={handleChange}
              >
                <option value="">Select Concent Form</option>
                <option value="MRI">MRI</option>
                <option value="ENDOSCOPY">ENDOSCOPY</option>
                <option value="FNAC">FNAC</option>
                <option value="USG">USG</option>
                <option value="HIV">HIV</option>
                <option value="OUTSOURCE">OUTSOURCE</option>
              </select>
              {errors?.concent_form && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.concent_form}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Billing Category: </label>
              <select
                className="ic form-select"
                name="billing_category"
                value={formData.billing_category}
                onChange={handleChange}
              >
                <option value="">Select Billing Category</option>
                <option value="0">Routine</option>
                <option value="1">Special</option>
              </select>
              {errors?.billing_category && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.billing_category}
                </span>
              )}
            </div>
            <div className="col-md-4 col-sm-4 col-12 mb-2">
              <label className="labelForTag">Max Discount:</label>
              <input
                name="max_discount"
                type="text"
                className="ic"
                value={formData.max_discount}
                onChange={handleChange}
              />
              {errors?.max_discount && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.max_discount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h5 className="card-collapse-head">Other Info</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 mb-2">
              <label className="labelForTag">What is it for ?</label>
              <CKEditor
                editor={ClassicEditor}
                data={formData.what_description}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={handleWhatDescriptoinChange}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />

              {errors?.what_description && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.what_description}
                </span>
              )}
            </div>
            <div className="col-md-12 col-sm-12 col-12 mb-2">
              <label className="instructions">Test Instructions</label>

              <CKEditor
                editor={ClassicEditor}
                data={formData.instructions}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={handleInstructionChange}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
              {errors?.instructions && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.instructions}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h5 className="card-collapse-head">Parameters Details</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 mb-2">
              <div className="d-flex justify-content-between">
                <label className="labelForTag">Parameters </label>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleAddRow}
                  type="button"
                >
                  Add Row
                </button>
              </div>

              <div className="">
                {rows.map((row, index) => (
                  <div className="row mb-3" key={index}>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={row.name}
                        onChange={(e) => handlePerametersInputChange(index, e)}
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="desc"
                        name="description"
                        value={row.description}
                        onChange={(e) => handlePerametersInputChange(index, e)}
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn btn-danger btn-sm" type="button"
                        onClick={() => handleRemoveRow(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {errors?.what_description && (
                <span className="error text-danger fw-bold text-capitalize">
                  {errors.what_description}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Test;
