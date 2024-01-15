import React, { Suspense } from "react";
import Loader from "../../assets/images/icons/svg/Loader";
import patientIcon from "../../assets/images/icons/svg/patient.png";
import oc1 from "../../assets/images/icons/svg/oc1.svg";
import oc2 from "../../assets/images/icons/svg/oc2.svg";
import oc3 from "../../assets/images/icons/svg/oc3.svg";
import oc4 from "../../assets/images/icons/svg/oc4.svg";
import oc5 from "../../assets/images/icons/svg/oc5.svg";
import oc6 from "../../assets/images/icons/svg/oc6.svg";
import Checked from "../../assets/images/icons/svg/checked.png";
import WallClock from "../../assets/images/icons/svg/wall-clock.png";
import Shield from "../../assets/images/icons/svg/shield.png";
import Mortarboard from "../../assets/images/icons/svg/mortarboard.png";
import Care from "../../assets/images/icons/svg/care.png";

const iconMap = {
  "patient.png": patientIcon,
  "oc1.svg": oc1,
  "oc2.svg": oc2,
  "oc3.svg": oc3,
  "oc4.svg": oc4,
  "oc5.svg": oc5,
  "oc6.svg": oc6,
  "checked.png": Checked,
  "wall-clock.png": WallClock,
  "shield.png": Shield,
  "mortarboard.png": Mortarboard,
  "care.png": Care,
};

const OurCommit = () => {
  const commitmentsData = [
    {
      icon: "oc1.svg",
      title: "Patient-Centric Approach",
      description:
        "We prioritize patient well-being. Our commitment ensures a stress-free experience through skilled professionals and compassionate care.",
    },
    {
      icon: "oc2.svg",
      title: "Quality Assurance",
      description:
        "Dedicated to top-quality standards. Advanced equipment, sterile procedures, and meticulous attention ensure accurate and reliable results.",
    },
    {
      icon: "oc3.svg",
      title: "Timely & Convenient Service",
      description:
        "Urgent tests? Our promise is swift service without compromising accuracy. Online scheduling and multiple locations make it seamless.",
    },
    {
      icon: "oc4.svg",
      title: "Ethical & Confidential Handling",
      description:
        "Privacy is vital. We follow ethical practices in handling samples. Personal and medical data are confidential, aligned with regulations.",
    },
    {
      icon: "oc5.svg",
      title: "Training & Development",
      description:
        "Investing in staff expertise. Our commitment includes ongoing training. Phlebotomists and techs stay updated with the latest practices.",
    },
    {
      icon: "oc6.svg",
      title: "Engagement & Outreach",
      description:
        "Beyond tests, we serve. Organizing drives and awareness events, we give back. Healthier communities are our contribution and goal.",
    },
  ];

  const CommitmentTab = ({ icon, title, description }) => {
    const iconImagePath = iconMap[icon];

    return (
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
        <div className="our-commit">
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <img src={iconImagePath} alt={title} className="our-commit-img" />
          </Suspense>
          <div className="mt-2">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };

  // Use lazy loading for dynamic import
  // const loadIconComponent = (icon) => {
  //   const LazyComponent = lazy(() => import(`../assets/images/icons/${icon}`));

  //   return LazyComponent;
  // };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          {/* <span className="line"></span>
          <span className="heading">Our Commitments</span>
          <span className="line"></span> */}
          <div className="">
            {/* <h5 className="subtitle"> */}
            {/* <span className="line"></span> */}
            {/* <span className="subtitle-text">Most Popular Packages</span> */}
            {/* </h5> */}
            {/* <h4 className="title">Our Commitments</h4> */}
            <h4 className="title">Our Commitments</h4>
          </div>
        </div>

        {commitmentsData.map((commitment, index) => (
          <CommitmentTab
            key={index}
            icon={commitment.icon}
            title={commitment.title}
            description={commitment.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurCommit;
