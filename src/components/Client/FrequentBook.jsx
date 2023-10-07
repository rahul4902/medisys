import React from "react";
import Thyroid from "./../../assets/images/icons/thyroid.svg";
const FrequentBook = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="title">Frequently Booked</h2>
        <div className="frequent-container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, key) => {
            return (
              <div className="frequent-card" key={key}>
                <div className="frequent-icon">
                  <img src={Thyroid} alt="Thyroid" className="frequent-img" />
                </div>
                <p>Thyroid</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FrequentBook;
