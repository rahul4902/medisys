import CartIcon from "../../assets/images/icons/svg/CartIcon";
const cardCounts = [1, 2, 3];
const FullBodyCheckup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-5">
          <div className="sectionHead">
            <h5 className="subtitle">
              <span className="line"></span>
              <span className="subtitle-text">Our Services</span>
            </h5>
            <h4 className="title">Services We Offer</h4>
          </div>
        </div>
        {cardCounts.map((item) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="dealwrapper">
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
                <div className="footer d-flex justify-content-center gap-3">
                  <button className="btn common-btn common-btn-danger">
                    Book Now
                  </button>{" "}
                  <button className="btn common-btn common-btn-primary">
                    <CartIcon /> Add To Cart
                  </button>
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

export default FullBodyCheckup;
