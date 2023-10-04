import React, { useState } from "react";
import "../../assets/css/auth.css";
import "../../assets/css/common.css";
import "../../assets/css/login.scss";
import LoginSlider from "./components/LoginSlider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleApiResponse } from "../../helper/apiHelpers";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
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
    setErrors(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        formData
      );
      handleApiResponse(
        response,
        (data) => {
          localStorage.setItem("AdminSessionToken", `${data.data.token}`);
          navigate("/admin/dashboard");
        },
        (errors) => {},
        setErrors
      );
    } catch (error) {
      console.log(error);
      toast.error("User Login Failed.");
    } finally {
      // setLoading(false);
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
              <h4>Sign In</h4>
              <p>Login To Manage Your Account</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="mb-3">
                    <label id="email_label" for="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label id="password_label" for="password">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 text-center">
                    <button
                      type="submit"
                      name="submit"
                      className="btn2-primary"
                    >
                      SignIn
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <p className="text-weight-bold">
                  Don't have any account?
                  <Link to="/admin/register" className="font-weight-bold">
                    SignUp
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

export default Login;
