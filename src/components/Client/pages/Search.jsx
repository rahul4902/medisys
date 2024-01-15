import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../../utils/constants";
import { useLocation } from "react-router-dom";
import ResultCard from "./ResultCard";
import ResultCount from "./ResultCount";
import MyContentLoader from "../includes/MyContentLoader";
const Search = () => {
  const [result, setResult] = useState([]);
  const [packageResult, setPackageResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [packageRecordCount, setPackageRecordCount] = useState(0);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

    const fetchData2 = async (type) => {
    try {
      setSearchLoader(true);
      if (searchLoader || !hasMore || allDataLoaded) return;
      const response = await axios.get(
        `${apiUrl}test/autocomplete?query=${query}&type=${type}&page=${page}`
      );
      if (response.data.status === 200) {
        if (type === "test") {
          setResult(response.data.data.products);
        } else {
          const newProducts = response.data.data.products;
          setHasMore(response?.data?.data?.hasMore);
          setAllDataLoaded(!response.data.data.hasMore);
          setPage(page + 1);
          setPackageRecordCount(packageResult.length);
          setPackageResult((prevProducts) => [...prevProducts, ...newProducts]);
        }
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handleScroll = async () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 10 &&
      !searchLoader &&
      hasMore &&
      !allDataLoaded
    ) {
      await fetchData2("package");
    }
  };
  useEffect(() => {
    const fetchData = async (type) => {
      try {
        // setSearchLoasder(true);
        // if (searchLoader || !hasMore || allDataLoaded) return;
        const response = await axios.get(
          `${apiUrl}test/autocomplete?query=${query}&type=${type}&page=${page}`
        );
        if (response.data.status === 200) {
          if (type === "test") {
            setResult(response.data.data.products);
          } else {
            const newProducts = response.data.data.products;
            setHasMore(response?.data?.data?.hasMore);
            setAllDataLoaded(!response.data.data.hasMore);
            setPage(page + 1);
            setPackageRecordCount(packageResult.length);
            setPackageResult((prevProducts) => [
              ...prevProducts,
              ...newProducts,
            ]);
          }
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
      fetchData("test");
      fetchData("package");
    } else {
      setSearchLoader(false);
    }
  }, [query]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const recordCount = result.length;
  // const packageRecordCount = packageResult.length;

  return (
    <>
      <div className="container mt-5">
        <ResultCount
          searchLoader={searchLoader}
          recordCount={recordCount}
          type="Test"
        />
        <div className="row">
          {result.map((_v, _x) => {
            return <ResultCard _v={_v} query={query} key={_x} />;
          })}
        </div>
      </div>
      <div className="container mt-5">
        <ResultCount
          searchLoader={searchLoader}
          recordCount={packageRecordCount}
          type="Package"
        />
        <div className="row">
          {packageResult?.map((_v, _x) => {
            return <ResultCard _v={_v} key={_x} query={query} />;
          })}
        </div>
        {searchLoader && <MyContentLoader />}
      </div>
    </>
  );
};

export default Search;
