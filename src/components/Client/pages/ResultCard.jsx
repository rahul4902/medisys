import React from "react";
import { Link } from "react-router-dom";
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

const ResultCard = ({ _v, key, query }) => {
  return (
    <div className="col-md-12 search-result-container" key={key}>
      <div className=" bg-white rounded-20 p-30">
        <Link to={`/test/${_v.slug}?query=${query}`}>
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
          <p className="card-body-description col-md-8">
            <TruncatedText text={_v.details} limit={120} />
            <span>More</span>
          </p>
        </div>
        <div className="card-foot">
          <div className="card-foot-left">
            <div>
              Reports in <span>{_v.tat_time}</span>
            </div>
            <div>
              <span className="">| </span>
              Tests
              <span className=""> {_v.testCounts}</span>
            </div>
          </div>
          <button className="card-foot-button btn btn-success common-btn ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
