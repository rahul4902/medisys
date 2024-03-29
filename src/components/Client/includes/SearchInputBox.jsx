import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/images/icons/svg/SearchIcon";
import MIceIcon from "../../../assets/images/icons/svg/MIceIcon";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "../../../utils/constants";
import { useValue } from "../../../context/clientContext";
import MicroPhoneAnimation from "./MicroPhoneAnimation";
import CloseIcon from "../../../assets/images/icons/svg/CloseIcon";
import Spinner from "./Spinner";

const SearchInputBox = () => {
  const navigate = useNavigate();
  const { query, setQuery } = useValue();
  const [isFocused, setIsFocused] = useState(false);
  const [searchLoader, setSearchLoader] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleInputChange = async (event) => {
    const { value } = event.target;
    setQuery(value);
    setSearchLoader(true);

    try {
      const response = await axios.get(
        `${apiUrl}test/autocomplete?query=${value}`
      );

      if (response.data.status === 200) {
        setSuggestions(response.data.data.products);
      } else {
        toast.error(response.data.message);
      }
      setSearchLoader(false);
    } catch (error) {
      console.error(error);
      setSearchLoader(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
    setIsFocused(false);
  };

  const clickSearch = (suggestion, slug = null) => {
    setQuery(suggestion);
    if (slug) {
      navigate(`/test/${slug}?query=${suggestion}`);
    } else {
      navigate(`/search?query=${suggestion}`);
    }
    setIsFocused(false);
  };

  // const startSpeechRecognition = () => {
  //   const recognition = new window.webkitSpeechRecognition();
  //   recognition.onresult = function (event) {
  //     const transcript = event.results[0][0].transcript;
  //     setQuery(transcript);
  //   };
  //   recognition.start();
  // };
  const startSpeechRecognition = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setIsListening(false);
    };
    recognition.onerror = function (event) {
      console.error("Error occurred in recognition: ", event.error);
      setIsListening(false); // Set state to false if recognition fails
    };
    recognition.start();
  };
  return (
    <>
      {isListening ? <MicroPhoneAnimation /> : ""}
      <div className="header-search">
        <div className={`item-search ${isFocused ? "search-list" : ""}`}>
          <div
            className={`search-input-box  ${
              isFocused ? "DesktopSearch_search__inputBox__focused__lrxno" : ""
            }`}
          >
            <SearchIcon />
            <form onSubmit={handleSubmit} autoComplete="off">
              <input
                type="text"
                placeholder="Search Tests"
                onFocus={handleFocus}
                value={query}
                onChange={handleInputChange}
                name="query"
              />
            </form>

            {isFocused ? (
              <div className="search-icon" onClick={handleBlur}>
                {searchLoader ? <Spinner /> : <CloseIcon height="2rem" />}
              </div>
            ) : (
              <div className="search-icon" onClick={startSpeechRecognition}>
                <MIceIcon />
              </div>
            )}
          </div>
          <div className="result-container" style={{ display: "none" }}>
            <div className="result">
              {query.length > 0 && suggestions && suggestions.length > 0 ? (
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        clickSearch(suggestion.title, suggestion.slug)
                      }
                    >
                      {suggestion.title}
                      {/* <small>({suggestion.sort_name})</small> */}
                    </li>
                  ))}
                </ul>
              ) : null}
              {query.length > 0 && suggestions && suggestions.length === 0 && (
                <ul>
                  <li>No records found.</li>
                </ul>
              )}
            </div>
            <div className="recent-container border-top-1">
              <span className="heading-text">Recent Searches</span>
              <div className="recent-tags">
                <div className="tag" onClick={() => clickSearch("Kidney")}>
                  Kidney
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInputBox;
