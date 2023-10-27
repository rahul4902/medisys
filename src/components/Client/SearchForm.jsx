import { useState } from "react";
import Location from "../../icons/Location";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { apiUrl } from "../../utils/constants";
import SearchInputBox from "./includes/SearchInputBox";
const SearchForm = () => {
  return (
    <div className="container">
      <div className="search-form">
        <div className="row justify-content-center">
          <div className="col-md-12 col-sm-12 col-12 px-md-5">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-6 col-lg-6 col-12">
                <SearchInputBox />
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-12">
                <div className="uploadBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    fill="#757575"
                    viewBox="0 0 448 512"
                  >
                    <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
                  </svg>
                  <span className="text">Upload Prescription</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
