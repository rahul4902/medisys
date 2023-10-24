import React from "react";

const CartIcon = ({ fill, height }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m3.208 3.792 2.427.42L6.76 17.596a2.1 2.1 0 0 0 2.1 1.928h12.727a2.1 2.1 0 0 0 2.082-1.803l1.108-7.652a1.565 1.565 0 0 0-1.325-1.772c-.074-.01-17.426-.016-17.426-.016M16.48 12.594h3.235"
        stroke="#2F3032"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.347 23.57a.635.635 0 1 1 0 1.269.635.635 0 0 1 0-1.27ZM21.507 23.57a.636.636 0 1 1 0 1.27.636.636 0 0 1 0-1.27Z"
        fill="#2F3032"
        stroke="#2F3032"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default CartIcon;
