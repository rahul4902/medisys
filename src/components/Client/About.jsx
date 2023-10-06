import React from "react";
import AboutImage from "../../assets/images/about.svg";

const About = () => {
  return (
    <div className="container my-5">
      <div className="about-card  shadow">
        <div className="row">
          <div className="col-md-7">
            <h5>About Us</h5>
            <div className="d-flex align-items-center h-100">
              <div>
                <h3>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h3>
                <p className="about-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  ipsum excepturi doloremque asperiores possimus atque ab iste
                  deserunt et dolor voluptas doloribus ea magni cupiditate
                  provident molestias, non assumenda facilis!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center">
              <img src={AboutImage} alt="about" className="about-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="team shadow bg-white mt-5 br-20 p-4">
        <h5 className="mb-4">Our Team</h5>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://dummyimage.com/320x250/#9c9090/0011ff.jpg"
              className="team-image"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://dummyimage.com/320x250/#9c9090/0011ff.jpg"
              className="team-image"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://dummyimage.com/320x250/#9c9090/0011ff.jpg"
              className="team-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
