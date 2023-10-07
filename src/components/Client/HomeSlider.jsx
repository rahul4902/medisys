import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Carousel } from "react-responsive-carousel";
import s1 from "../../assets/images/banner/1.jpg";
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
        {[s3, s3, s3].map((_v, _x) => {
          return (
            <div key={_x}>
              <LazyLoadImage
                className="carousel-image"
                src={_v}
                alt={_x}
                height="440"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeSlider;
