import React, { useState } from "react";
import BackArrow from "../../../assets/images/icons/svg/BackArrow";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import Stepper from "react-stepper-horizontal";
import StepperCheckout from "./StepperCheckout";
const Checkout = () => {
  const {
    cart,
    calculateSubtotal,
    calculateDiscount,
    decrementQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      <div className="container  pb-5">
        <div className="mt-3 d-flex gap-2 align-items-center">
          <BackArrow />
          <Link to="/" className="text-dark">
            Home
          </Link>
          /
          <span>
            <b>Checkout</b>
          </span>
        </div>
        <div className="rounded-20 shadow bg-white checkout p-30 mt-5">
          <StepperCheckout />
        </div>
      </div>
    </>
  );
};

export default Checkout;
