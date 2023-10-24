import CartIcon from "../../assets/images/icons/svg/CartIcon";
import { useValue } from "../../context/clientContext";
import ReadMoreOffer from "./ReadMoreOffer";
const cardCounts = [1, 2, 3, 4, 5];
const FullBodyCheckup = () => {
  const { readMoreCanvas, setReadMoreCanvas } = useValue();
  function readMore() {
    setReadMoreCanvas(!readMoreCanvas);
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div>
              {/* <h5 className="subtitle">
              <span className="line"></span>
              <span className="subtitle-text">Our Services</span>
            </h5> */}
              <h2 className="title">Our Offers</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="scrollable-container">
              {cardCounts.map((item, x) => {
                return (
                  <div className="dealwrapper " key={x}>
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
                      <button
                        className="btn common-btn btn-secondary"
                        onClick={readMore}
                      >
                        Read More
                      </button>
                      <button className="btn common-btn btn-success">
                        <CartIcon /> Add To Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ReadMoreOffer />
    </>
  );
};

export default FullBodyCheckup;
