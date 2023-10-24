import { useState } from "react";
import Location from "../../icons/Location";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { apiUrl } from "../../utils/constants";
import SearchInputBox from "./includes/SearchInputBox";
const SearchForm = () => {
  const [searchLoader, setSearchLoader] = useState(false);
  const [location, setLocation] = useState(1);
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const typeChangeHandler = async (event) => {
    const { value } = event.target;
    setType(value);
  };
  const locationChangeHandler = async (event) => {
    const { value } = event.target;
    setLocation(value);
  };
  const handleInputChange = async (event) => {
    const { value } = event.target;
    setQuery(value);
    setSearchLoader(true);

    try {
      const response = await axios.get(
        `${apiUrl}/test/autocomplete?type=${type}&location=${location}&query=${value}`
      );

      if (response.data.status === 200) {
        setSuggestions(response.data.data);
      } else {
        toast.error(response.data.message);
      }
      setSearchLoader(false);
    } catch (error) {
      console.error(error);
      setSearchLoader(false);
    }
  };

  return (
    <div className="container">
      <div className="search-form">
       
          <div className="row justify-content-center">
            <div className="col-md-12 col-sm-12 col-12 px-5">
              <div className="row justify-content-center">
                <div className="col-md-6 col-sm-6 col-lg-6 col-12">
                  {/* <div className="input-group">
                    <select
                      className="form-select"
                      name="type"
                      value=""
                      onChange={typeChangeHandler}
                      aria-label="Location"
                    >
                      <option value="">All</option>
                      <option value="test">Tests</option>
                      <option value="package">Package</option>
                    </select>

                    <div>
                    <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    name="query"
                    placeholder="Search here..."
                    />
                    {searchLoader && (
                        <div
                          className="spinner-grow spinner-grow-sm autocomplete-loader"
                          role="status"
                          >
                          <span className="sr-only" />
                          </div>
                          )}
                          
                          {query.length > 0 &&
                            suggestions &&
                            suggestions.length > 0 ? (
                              <ul>
                              {suggestions.map((suggestion, index) => (
                                <li key={index}>
                                <Link to={`/search/details/${suggestion.id}`}>
                                {suggestion.name}
                                <small>({suggestion.sort_name})</small>
                                </Link>
                                </li>
                          ))}
                        </ul>
                      ) : null}
                      {query.length > 0 &&
                        suggestions &&
                        suggestions.length === 0 && (
                          <ul>
                            <li>No records found.</li>
                          </ul>
                        )}
                    </div>
                  </div> */}
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
                {/* <div className="col-md-4 col-sm-4 col-lg-4 col-12">
                  <div className="location-container">
                    <select
                    name="location"
                    className="select-input no-focus-outline location-input"
                    value="1"
                    onChange={locationChangeHandler}
                      aria-label="Location Search"
                    >
                      <option value={1}>Greater Noida</option>
                    </select>
                    <span className="select-icon">
                      <Location height="1.5rem" />
                    </span>
                  </div>
                </div> */}
                {/* <div className="col-md-2 col-sm-2 col-lg-2 col-6">
                  <button className="search-btn">
                    <div className="icon-container">
                      <Search height="18px" />
                    </div>
                    <span>Search</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SearchForm;
