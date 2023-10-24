import React from "react";
import BGIM from "../../assets/images/banner/1.jpeg";

const HomeSlider = React.lazy(() => import("./HomeSlider"));
const Banner = () => {
  return (
    <>
      {/* <div className="image-container home-banner">
        <HomeSlider />
      </div> */}
      <div className="image-container home-image">
        <img src={BGIM} alt="bg" className="banner-image" />
      </div>
    </>
  );
};

export default Banner;
