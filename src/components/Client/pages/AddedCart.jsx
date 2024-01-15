import React from "react";
import CheckCircle from "../../../assets/images/icons/svg/CheckCircle";
import { Link } from "react-router-dom";

const AddedCart = () => {
  return (
    <div className="checkoutContainer">
      <div className="container">
        <div className="floating bg-white rounded-20 px-md-2 px-3 py-2 d-flex justify-content-between align-items-center">
          <div className="mx-2 d-flex align-items-center gap-2">
            <CheckCircle height={"1.2rem"} />
            <p className="title m-0 fw-bold fs-6 btn-dark">
              {" "}
              Item Added To Cart
            </p>
          </div>
          <Link className="btn btn-sm btn-dark common-btn" to="/cart">
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddedCart;
