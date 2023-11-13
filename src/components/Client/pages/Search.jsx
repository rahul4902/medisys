import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../../utils/constants";
import { toast } from "react-toastify";
import Loader from "../../Loader";
import { useLocation } from "react-router-dom";
import ExclamationIcon from "../../../assets/images/icons/svg/ExclamationIcon";
const Search = () => {
  const [result, setResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      setSearchLoader(true);
      try {
        const response = await axios.get(
          `${apiUrl}/test/autocomplete?query=${query}`
        );

        if (response.data.status === 200) {
          console.log("response.data.data", response.data.data);
          setResult(response.data.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setSearchLoader(false);
      }
    };

    if (query) {
      fetchData();
    } else {
      setSearchLoader(false);
    }
  }, [query]);
  const recordCount = result.length;

  return (
    <>
      <div className="container mt-5">
        <div className="col-12 mb-2 text-center">
        {!searchLoader && recordCount > 0 && (
          <h2 className="title">{recordCount} Result Found</h2>
        )}
        {!searchLoader && !recordCount && (
          <h2 className="title"><ExclamationIcon fill="#0e3f6c"/>  Ensure your spelling is accurate or try using a different term.</h2>
        )}
        </div>
       
        {searchLoader ? (
          <Loader />
        ) : (
          <div className="row">
            
            {result.map((_v, _x) => {
              return (
                <div className="col-md-12 search-result-container" key={_x}>
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
                        <span className="card-head-price-offerprice">
                          ₹3999
                        </span>
                        <span className="card-head-price-mainprice">
                          ₹12500
                        </span>
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
        )}
      </div>
    </>
  );
};

export default Search;
