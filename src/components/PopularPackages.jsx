import CheckCircle from "../icons/CheckCircle";
import CounterAnimation from "./CounterAnimation";

const PopularPackages = () => {
  const featersList = [
    {
      title: "HbA1c (Glycated hemoglobin)",
      description: "Higher HbA1c, Greater diabetes complications",
    },
    {
      title: "Thyroid Profile - T3 T4 TSH ",
      description: "Weight Gain/Loss, Mood Swings",
    },
    {
      title: "HbA1c (Glycated hemoglobin)",
      description: "Higher HbA1c, Greater diabetes complications",
    },
    {
      title: "Thyroid Profile - T3 T4 TSH ",
      description: "Weight Gain/Loss, Mood Swings",
    },
  ];
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 mb-5">
          {/* <span className="line"></span>
          <span className="heading">Most Popular Packages</span>
          <span className="line"></span> */}
          <div className="sectionHead">
            <h5 className="subtitle">
              <span className="line"></span>
              <span className="subtitle-text">Most Popular Packages</span>
            </h5>
            <h4 className="title">Popular Packages</h4>
          </div>
        </div>

        {[1, 2, 4].map((_v, _x) => {
          return (
            <div className="col-md-4 col-sm-6 col-xs-12" key={_x}>
              <div className="dealwrapper primary">
                <div className="body">
                  <h4 className="heading-2">Smart Health Full Body Checkup</h4>
                  <h6>(with Thyroid Profile & CBC)</h6>
                </div>
                <hr />
                <div className="test-counts">
                  <span className="test-number">
                    <CounterAnimation targetNumber={82} />
                    <small>Tests Just</small>
                    <span className="ps-3">
                      <small>₹</small>499
                    </span>
                  </span>
                </div>
                <hr />
                <div className="features-2 py-2">
                  <ul>
                    {featersList?.map((_v, _x) => {
                      return (
                        <li key={_x}>
                          <div className="d-flex gap-3 align-items-center">
                            <div>
                              <CheckCircle height="1.3rem" />
                            </div>
                            <div>
                              <h6>{_v.title}</h6>
                              <span>( {_v.description} )</span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="footer">
                  <div className="button-container">
                    <button
                      href="#"
                      className="btn common-btn btn-secondary common-btn-hover-zoom"
                    >
                      Read More
                    </button>
                  </div>
                  <div className="button-container">
                    <button
                      href="#"
                      className="btn common-btn common-btn-primary common-btn-hover-zoom"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              ​
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularPackages;
