import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import s1 from "../../../assets/images/slider/1.png";
import s2 from "../../../assets/images/slider/2.png";
import s3 from "../../../assets/images/slider/3.png";

function LoginSlider() {
  return (
    <div className="slider-section">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
      >
        {[s1, s2, s3].map((_v, _x) => {
          return (
            <div key={_x}>
              <img className="carousel-image" src={_v} alt={_x} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default LoginSlider;
