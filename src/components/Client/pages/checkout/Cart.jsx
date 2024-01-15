import React from "react";
import { useCart } from "../../../../context/CartContext";
import CartCard from "../CartCard";
import Total from "./Total";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="mt-5 pb-5">
      <div className="row d-flex flex-row-reverse">
        <div className="col-md-4 col-lg-4 col-0 mb-4">
          <Total />
        </div>
        <div className="col-md-8 col-lg-8 col-12">
          {(!cart || !cart.length) && (
            <div className="col-12 rounded-20 border border-light border-3 bg-white py-3 px-4 mb-3">
              <h6 className="text-center">Empty Cart</h6>
            </div>
          )}
          {cart.map((c, _k) => {
            return <CartCard _v={c} key={_k} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
