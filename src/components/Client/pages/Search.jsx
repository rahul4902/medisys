import React from "react";

const Search = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-2">
            <h4 className="title">1 Test Found</h4>
          </div>
          {[1, 2, 3].map(() => {
            return (
              <div className="col-md-12 search-result-container">
                <div className=" bg-white rounded-20 p-30">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span className="card-heading-text">
                        <b>
                          Master Full Body Checkup Package - Male{" "}
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
                      <span className="card-head-price-offerprice">₹3999</span>
                      <span className="card-head-price-mainprice">₹12500</span>
                    </div>
                  </div>
                  <div>
                    <p className="card-body-description col-md-8">
                      <span>
                        Measures various body parameters, like CBC, Lipid
                        profile, Rh factor, TSH, ....
                      </span>
                      <span>More</span>
                    </p>
                  </div>
                  <div className="card-foot">
                    <div className="card-foot-left">
                      <div>
                        Reports in <span>15 hrs</span>
                      </div>
                      <div>
                        <span className="">| </span>
                        Tests
                        <span className="">104</span>
                      </div>
                    </div>
                    <button className="card-foot-button btn btn-success common-btn ">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
