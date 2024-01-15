import React, { useEffect, useState } from "react";

import Trash from "../../../assets/images/icons/svg/Trash";
import AddedCart from "../pages/AddedCart";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useCart } from "../../../context/CartContext";

const AddToCart = ({ product, showRemove = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  // const [cart, setCart] = useLocalStorage("cart", []);

  const isInCart = cart.some((item) => item.id === product.id);
  var item = {
    id: product.id,
    title: product.title,
    slug: product.slug,
    sub_title: product.sub_title,
    package_or_test: product.package_or_test,
    code: product.code,
    discount: product.discount,
    discountType: product.discountType,
    category_id: product.category_id,
    mrp: product.mrp,
    price: product.price,
    parametersCount: product.parametersCount,
    details: product.details,
    quantity: 1,
  };

  const handleAddToCart = () => {
    // setCart([...cart, { ...item, quantity: 1 }]);
    addToCart(item);
    setIsVisible(true);
    console.log("cart", cart);
  };
  // };

  const handleRemove = () => {
    // const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    // // setCart(updatedCart);
    removeFromCart(item.id);
    console.log("cart", cart);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isVisible]); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div>
        {isInCart ? (
          <>
            {/* <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-success btn-sm rounded shadow"
              onClick={handleDecrement}
            >
              <Minus />
            </button>
            <span className="quantity mx-2 fw-bold fs-5">
              {cart.find((item) => item.id === product.id)?.quantity || 0}
            </span>
            <button
              className="btn btn-success btn-sm rounded shadow"
              onClick={handleIncrement}
            >
              <Plus />
            </button>
            {showRemove && <button
              className="btn btn-outline-danger btn-sm rounded shadow mx-2"
              onClick={handleRemove}
            >
              <Trash fill="#dc3545"/>
            </button>}
            
          </div> */}
            <button
              className="btn btn-sm btn-outline-danger common-btn"
              onClick={handleRemove}
            >
              <Trash fill="#dc3545" />
            </button>
          </>
        ) : (
          <button
            className="btn btn-sm btn-success common-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
      {isVisible && <AddedCart />}
    </>
  );
};

export default AddToCart;
