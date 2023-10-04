import React, { useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";

const PrivateAdminRoute = ({ element }) => {
  const isAuthenticatedAsAdmin = localStorage.getItem("AdminSessionToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticatedAsAdmin) {
      navigate("/admin/login");
    }
  }, [isAuthenticatedAsAdmin, navigate]);

  return isAuthenticatedAsAdmin ? element : null;
};

export default PrivateAdminRoute;
