import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import CartIcon from "../../../assets/images/icons/svg/CartIcon";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useCart } from "../../../context/CartContext";

const SiteNav = () => {
  const { cart } = useCart();
  const [totalCartItems, setTotalCartItems] = useState(0);

  // setTotalCartItems(
  //   cart.reduce((total, item) => total + (item.quantity || 0), 0)
  // );

  useEffect(() => {
    setTotalCartItems(
      cart.reduce((total, item) => total + (item.quantity || 0), 0)
    );
  }, [cart]);

  return (
    <div className="header">
      
      <div className="main-header">
        <div className="top-nav">
          <div className="logo-side">
            <Link to="/">
              <img
                className="logo-image"
                src={Logo}
                alt="Logo"
                height="40px"
                width="100%"
              />
            </Link>
          </div>

          {/* <SearchInputBox /> */}
          <div className="right-side">
            <a className="header-buttons" href="/cart">
              {/* <span className="header-buttons-text">Cart</span> */}
              <span className="header-cart-count">{totalCartItems}</span>
              <CartIcon />
            </a>
            <div className="header-buttons">
              {/* <span className="header-buttons-text">Profile</span> */}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M13.982 17.904c-4.512 0-8.365.682-8.365 3.414 0 2.733 3.829 3.44 8.365 3.44 4.512 0 8.365-.684 8.365-3.415s-3.828-3.44-8.365-3.44Z"
                  stroke="#2F3032"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M13.982 14.007A5.362 5.362 0 1 0 8.62 8.645a5.344 5.344 0 0 0 5.325 5.362h.037Z"
                  stroke="#2F3032"
                  strokeWidth="1.429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteNav;
