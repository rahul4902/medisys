import React, { useEffect, useState } from "react";
import BGIM from "../../assets/images/banner/1.jpeg";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

const Banner = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}banner`);

        if (response.data.status === 200) {
          setResult(response.data?.data?.images);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="image-container home-image">
        <img src={BGIM} alt="bg" className="banner-image" />
        {/* {result.length > 0 &&
            result.map((_v, _x) => (
              <img key={_x} src={_v.image} alt="bg" className="banner-image" />
            ))} */}
      </div>
    </>
  );
};

export default Banner;
