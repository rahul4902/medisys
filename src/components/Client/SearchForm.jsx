import { useState } from "react";
import Location from "../../icons/Location";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
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
        `http://localhost:5000/test/autocomplete?type=${type}&location=${location}&query=${value}`
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
        <form action="#">
          <div className="row justify-content-center">
            <div className="col-md-12 col-sm-12 col-12">
              <div className="row justify-content-center">
                <div className="col-md-6 col-sm-6 col-lg-6 col-12 search-autocomplete">
                  <div className="input-group auto-complete-section">
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
                          <span class="sr-only" />
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
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 col-12">
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
                </div>
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
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
