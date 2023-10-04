const FullBodyCheckup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-5">
          {/* <span className="line"></span>
          <span className="heading">Full Body Checkup</span>
          <span className="line"></span> */}
          <div className="sectionHead">
            <h5 className="subtitle">
              <span className="line"></span>
              <span className="subtitle-text">Our Services</span>
            </h5>
            <h4 className="title">Services We Offer</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 col-12">
          <div className="dealwrapper danger">
            <div className="ribbon-wrapper">
              <div className="ribbon-tag">30% Off</div>
            </div>
            <div className="header">
              <span>
                <del className="mrp">₹1350</del>
                <sup>₹</sup>

                <span className="price">499</span>
              </span>
            </div>
            <div className="body">
              <h6>Smart Health Full Body Checkup</h6>
            </div>
            <hr />
            <div className="features">
              <h5>Same Day Report</h5>
            </div>
            <div className="footer">
              <button href="#" className="btn common-btn common-btn-danger">
                Book Now
              </button>
            </div>
          </div>
          ​
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="dealwrapper primary">
            <div className="ribbon-wrapper">
              <div className="ribbon-tag">30% Off</div>
            </div>
            <div className="header">
              <span>
                <del className="mrp">₹1350</del>
                <sup>₹</sup>

                <span className="price">499</span>
              </span>
            </div>
            <div className="body">
              <h6>Smart Health Full Body Checkup</h6>
            </div>
            <hr />
            <div className="features">
              <h5>Same Day Report</h5>
            </div>
            <div className="footer">
              <button href="#" className="btn common-btn common-btn-primary">
                Book Now
              </button>
            </div>
          </div>
          ​
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="dealwrapper success">
            <div className="ribbon-wrapper">
              <div className="ribbon-tag">30% Off</div>
            </div>
            <div className="header">
              <span>
                <del className="mrp">₹1350</del>
                <sup>₹</sup>

                <span className="price">499</span>
              </span>
            </div>
            <div className="body">
              <h6>Smart Health Full Body Checkup</h6>
            </div>
            <hr />
            <div className="features">
              <h5>Same Day Report</h5>
            </div>
            <div className="footer">
              <button href="#" className="btn common-btn common-btn-success">
                Book Now
              </button>
            </div>
          </div>
          ​
        </div>
      </div>
    </div>
  );
};

export default FullBodyCheckup;
