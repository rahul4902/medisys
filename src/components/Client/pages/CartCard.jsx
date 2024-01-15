import React from "react";
import { Link } from "react-router-dom";
import Trash from "../../../assets/images/icons/svg/Trash";
import { useCart } from "../../../context/CartContext";
import CircleExclamation from "../../../assets/images/icons/svg/CircleExclamation";
const TruncatedText = ({ text, limit }) => {
  if (!text) {
    return "";
  }
  if (text?.length <= limit) {
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  }

  const truncatedText =
    text.slice(0, limit) + (text.length > limit ? "..." : "");

  return <span dangerouslySetInnerHTML={{ __html: truncatedText }} />;
};

const CartCard = ({ _v, _k }) => {
  const { cart, removeFromCart } = useCart();
  const handleRemove = (item) => {
    removeFromCart(item.id);
    console.log("cart", cart[0]);
  };
  return (
    <div className="col-md-12 search-result-container" key={_k}>
      <div className="bg-white rounded-20 p-30  border border-light border-3">
        <Link to={`/test/${_v.slug}`}>
          <div className="d-flex justify-content-between">
            <div>
              <span className="card-heading-text">
                <b>
                  {_v.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </b>
              </span>
            </div>
            <div className="card-head-price">
              <span className="card-head-price-offerprice">₹{_v.price}</span>
              <span className="card-head-price-mainprice">₹{_v.mrp}</span>
            </div>
          </div>
        </Link>
        <div>
          <p className="card-body-description text-muted">
            <b>Quantity</b> : {_v.quantity}
          </p>
        </div>
        <div className="card-foot">
          <div className="card-foot-left">
            <div className="d-flex align-items-center gap-2">
              <span className=""> {_v.parametersCount} Parameters</span>
              <span>
                <CircleExclamation fill="#9d9fa1" height="11px" width="11px" />
              </span>
            </div>
          </div>
          <button
            className="btn btn-sm btn-outline-danger rounded shadow d-flex"
            onClick={(e) => {
              handleRemove(_v);
            }}
          >
            <Trash fill="#dc3545" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
