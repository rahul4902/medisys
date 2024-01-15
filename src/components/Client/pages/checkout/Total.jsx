import React from "react";
import { useCart } from "../../../../context/CartContext";

const Total = () => {
  const { calculateSubtotal, calculateDiscount } = useCart();
  return (
    <div className="rounded-20 bg-white checkout p-30 border border-light border-3">
      <div className="d-flex justify-content-between mb-1">
        <p className="title">Sub Total</p>
        <p className="title">
          <b>₹{calculateSubtotal()}</b>
        </p>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <p className="title">Discount</p>
        <p className="title">
          <b>₹{calculateDiscount()}</b>
        </p>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <p className="title">Total</p>
        <p className="title">
          <b>₹{calculateSubtotal() - calculateDiscount()}</b>
        </p>
      </div>
    </div>
  );
};

export default Total;
