import React, { useState } from "react";
import "../../assets/css/auth.css";
import "../../assets/css/common.css";
import "../../assets/css/login.scss";
import LoginSlider from "./components/LoginSlider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { handleApiResponse } from "../../helper/apiHelpers";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        formData
      );
      handleApiResponse(
        response,
        (data) => {
          navigate("/admin/login");
        },
        (errors) => {},
        setErrors
      );
    } catch (error) {
      console.log(error);
      toast.error("User Registration Failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-section">
      <div className="login-section border-animation col-md-11 col-sm-11 col-lg-11 col-lx-11 col-12">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-xs-0 col-0 ">
            <LoginSlider />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6  col-xs-12 col-12">
            <div className="p-4">
              <h4>Sign Up</h4>
              <p>Login To Manage Your Account</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="mb-3">
                    <label
                      id="name_label"
                      for="name"
                      className="animated-label"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form-control  ${
                        errors?.name ? "is-invalid" : ""
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors?.name && (
                      <span className="error text-danger fw-bold text-capitalize">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label id="email_label" for="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-control  ${
                        errors?.email ? "is-invalid" : ""
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors?.email && (
                      <span className="error text-danger fw-bold text-capitalize">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label id="password_label" for="password">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className={`form-control  ${
                        errors?.password ? "is-invalid" : ""
                      }`}
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    {errors?.password && (
                      <span className="error text-danger fw-bold text-capitalize">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 text-center">
                    <button
                      type="submit"
                      name="submit"
                      className="btn2-primary"
                      disabled={loading}
                    >
                      {loading ? "Signing up..." : "Sign Up"}
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <p className="text-weight-bold">
                  Already have account?
                  <Link to="/admin/login" className="font-weight-bold">
                    SignIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
