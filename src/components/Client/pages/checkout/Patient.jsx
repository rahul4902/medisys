import React from "react";
import Total from "./Total";
import { useCart } from "../../../../context/CartContext";

const Patient = () => {
  const { cart } = useCart();
  return (
    <div className="mt-5 pb-5">
      <div className="row d-flex flex-row-reverse">
        <div className="col-md-4 col-lg-4 col-0 mb-4">
          <Total />
        </div>
        <div className="col-md-8 col-lg-8 col-12">
            
        </div>
      </div>
    </div>
  );
};

export default Patient;
