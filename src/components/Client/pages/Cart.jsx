import React, { useState } from "react";
import BackArrow from "../../../assets/images/icons/svg/BackArrow";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import Trash from "../../../assets/images/icons/svg/Trash";
import CartCard from "./CartCard";
import CheckoutSticky from "./CheckoutSticky";
import OrderAddress from "./OrderAddress";

const Cart = () => {
  const [orderAddressShow, setOrderAddressShow] = useState(false);
  const { cart, calculateSubtotal, calculateDiscount } = useCart();

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
            <b>Cart</b>
          </span>
        </div>
        <div className="mt-5 pb-5">
          <div className="row d-flex flex-row-reverse">
            <div className="col-md-4 col-lg-4 col-0 mb-4">
              <div className="rounded-20 shadow bg-white checkout p-30">
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
            </div>
            <div className="col-md-8 col-lg-8 col-12">
              {(!cart || !cart.length) && (
                <div className="col-12 rounded-20 shadow bg-white py-3 px-4 mb-3">
                  <h6 className="text-center">Empty Cart</h6>
                </div>
              )}
              {cart.map((c, _k) => {
                return <CartCard _v={c} key={_k} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <CheckoutSticky
        totalAmount={calculateSubtotal() - calculateDiscount()}
        setOrderAddressShow={setOrderAddressShow}
      />
      {/* {orderAddressShow && (
        <OrderAddress setOrderAddressShow={setOrderAddressShow} />
      )} */}
    </>
  );
};

export default Cart;
