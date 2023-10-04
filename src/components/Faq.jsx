import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const accordionData = [
    {
      header:
        "Full Body Checkup in Delhi NCR Punjab Haryana Chandigarh Tricity",
      content:
        "MediTest.in is India’s one of the Best Full Body Check up @ Free Home Sample Collection Service provider company significantly helping Indians to live the life disease free. Everyone aware that Prevention is better than Cure but Today is the time we should understand and follow that Prevention is the only Cure. To achieve this, MediTest have prepared customized Full Body Preventive Health Checkup packages with the help of experts in the medical field. These packages will help people to find the diseases at very initial level (if someone going for preventive packages as per his/her family history,Gender,Age and Risk Areas ) so that necessary steps can be taken accordingly before its too late. full body check-up price, complete body check up cost, best full body checkup, full body checkup hospitals, best hospital for full body checkup, Noida, Ghaziabad, Patiala, Mohali, Chandigarh, Tricity, Faridabad, Gurugram, gurgaon, greater noida, pathology labs, preventive health checkup, Complete body check-up in delhi",
    },
    {
      header: "How to book a test online?",
      content:
        'You can book a health test on the Meditest website through the following ways Select a package that best suits your requirements or doctor recommended tests from the "Health Checkup Packages". You will be prompted to update your location on top right of the screen - please select the location for which you wish to see the packages (for example, if you live in Gurgaon, and you wish to check packages for your parents who live in Indore, please select Indore in location prompt.)',
    },
    {
      header: "What are some basic technical skills of a Front-End developer?",
      content: (
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Frameworks (CSS and JavaScript frameworks)</li>
          <li>Responsive Design</li>
          <li>Version Control/Git</li>
          <li>Testing/Debugging</li>
          <li>Browser Developer Tools</li>
          <li>Web Performance</li>
          <li>SEO (Search Engine Optimization)</li>
          <li>Command Line</li>
          <li>CMS (Content Management System)</li>
        </ul>
      ),
    },
    {
      header: "What is HTTP?",
      content:
        "HTTP, aka HyperText Transfer Protocol, is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.",
    },
    {
      header: "What is CORS?",
      content:
        "CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.",
    },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="col-12 text-center py-5">
          {/* <span className="line"></span>
          <span className="heading">FAQ'S</span>
          <span className="line"></span> */}
          <div className="sectionHead">
            <h5 className="subtitle">
              {/* <span className="line"></span> */}
              {/* <span className="subtitle-text">Most Popular Packages</span> */}
            </h5>
            <h4 className="title">FAQ'S</h4>
          </div>
        </div>
        <div className="col-12">
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="accordion-item-header"
                  onClick={() => handleAccordionClick(index)}
                >
                  {item.header}
                </div>
                <div
                  className="accordion-item-body"
                  style={{
                    maxHeight: activeIndex === index ? "1000px" : "0",
                  }}
                >
                  <div className="accordion-item-body-content">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
