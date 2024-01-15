import React, { useEffect, useRef, useState } from "react";
import RupeeSymbol from "../../../assets/images/icons/svg/RupeeSymbol";
import BackArrow from "../../../assets/images/icons/svg/BackArrow";
import { Link, useLocation, useParams } from "react-router-dom";
import { apiUrl } from "../../../utils/constants";
import axios from "axios";
import MyContentLoader from "../includes/MyContentLoader";
import Accordion from "../includes/Accordion";
import { useCart } from "../../../context/CartContext";
import AddToCart from "../includes/AddToCart";

const SearchResults = () => {
  const [searchLoader, setSearchLoader] = useState(false);
  const [result, setResult] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSearchLoader(true);
        const response = await axios.get(`${apiUrl}test/getById/${slug}`);
        console.log("response", response);
        if (response.data.status === 200) {
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
    if (slug) {
      fetchData();
    } else {
      setSearchLoader(false);
    }
  }, [slug]);

  return (
    <>
      <div className="container mt-3 d-flex gap-2 align-items-center">
        <Link to={`/`} className="text-dark">
          <BackArrow />
          <span className="ms-2">Home</span>
        </Link>
        /{" "}
        <span>
          <b>Test Details</b>
        </span>
      </div>
      {!searchLoader && (
        <div className="container testDetails py-4">
          <div className="productDetails bg-white">
            <div className="d-flex justify-content-between flex-wrap align-items-center">
              <div className="col-md-9 col-sm-7 col-8 text-start">
                <h5 className=" mb-3">{result.title}</h5>

                <p>Fasting : {result.fasting_time}</p>
                <p>Age Group: {result.age}</p>
                <p>Get reports in : {result.tat_time}</p>

                <p>Parameters covered : {result.parametersCount}</p>
              </div>
              <div className="col-md-3 col-sm-5 col-4 text-center">
                <h5>
                  <RupeeSymbol />
                  <span>{result.price}</span>
                  <del className="text-secondary">
                    <RupeeSymbol />
                    <small>
                      <span>{result.mrp}</span>
                    </small>
                  </del>
                </h5>
                <AddToCart product={result} showRemove={true} />
              </div>
            </div>
          </div>

          <div className="productDetails bg-white mt-5">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <h5 className="text-mute">Also Known As</h5>
                <div className="productDescription">
                  <p>{result.also_known_as}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="productDetails bg-white mt-5">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <h5>What is {result.title}</h5>
                <div className="productDescription">
                  <p>{result.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="productDetails bg-white mt-5">
            <div className="row">
              <div className="col-lg-12 mt-4 mt-lg-0 parameters">
                <div className="d-flex align-items-center pb-2 mt-2 mb-3">
                  <h5 className="parametersText mb-0 ml-2">Parameters</h5>
                </div>
                <div className="row parameterData">
                  {result.parameterList?.map((param, key) => {
                    return (
                      <div
                        className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                        key={key}
                      >
                        <p className="parameterValues">
                          {key + 1}. &nbsp;{param.title}
                        </p>
                      </div>
                    );
                  })}
                  {/*  */}
                  {result?.products?.map((product) => (
                    <Accordion key={product.id} {...product} />
                  ))}
                  {/* {questions.map((question) => (
                    <Accordion key={question.id} {...question} />
                  ))} */}
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          {result.details && (
            <div className="productDetails bg-white mt-5">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <h5 className="text-mute">Usage</h5>
                  <div className="productDescription">
                    <p>{result.details}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {searchLoader && (
        <div className="container">
          <MyContentLoader />
        </div>
      )}
    </>
  );
};

export default SearchResults;
