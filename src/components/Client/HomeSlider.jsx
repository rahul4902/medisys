import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import s1 from "../../assets/images/banner/1.jpg";
import s2 from "../../assets/images/banner/2.jpg";
import s3 from "../../assets/images/banner/3.jpg";

function HomeSlider() {
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
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeSlider;
