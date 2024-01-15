import React from "react";
import { Link } from "react-router-dom";

const CheckoutSticky = ({ totalAmount, setOrderAddressShow }) => {
  const placeOrder = () => {
    //setOrderAddressShow(true);
  };
  return (
    <div className="checkoutContainer">
      <div className="container">
        <div className="floating bg-white rounded-20 px-md-2 px-3 py-2 d-flex justify-content-between align-items-center">
          <div className="mx-2">
            <p className="title m-0 fw-bold fs-6">
              Pay : ₹<b className="fs-5">{totalAmount}</b>
            </p>
          </div>
          <Link to={"/checkout"} className="btn btn-sm btn-success common-btn">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSticky;
