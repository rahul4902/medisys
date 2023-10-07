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
            <span className="title">Services We Offer</span>
          </div>
        </div>
        {cardCounts.map((item, x) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
              key={x}
            >
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
                  <span>Smart Health Full Body Checkup</span>
                </div>
                <hr />
                <div className="features">
                  <h5>Same Day Report</h5>
                </div>
                <div className="footer d-flex justify-content-center gap-3">
                  <button className="btn common-btn btn-secondary">
                    Book Now
                  </button>{" "}
                  <button className="btn common-btn btn-success">
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
