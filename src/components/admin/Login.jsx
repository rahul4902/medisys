import React, { useState } from "react";
import LoginSlider from "./components/LoginSlider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleApiResponse } from "../../helper/apiHelpers";
import { toast } from "react-toastify";

function Login() {
  const [loaderBtn, setLoaderBtn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [setErrors] = useState({
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
    setLoaderBtn(true);
    setErrors({
      email: "",
      password: "",
    });

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
      setLoaderBtn(false);
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
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="mb-3">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control ic"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control ic"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 text-center">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-success common-btn"
                      disabled={loaderBtn}
                    >
                      {loaderBtn && (
                        <div
                          class="spinner-border spinner-border-sm me-2"
                          role="status"
                        >
                          <span class="sr-only"></span>
                        </div>
                      )}
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
