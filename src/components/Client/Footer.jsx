import { Link } from "react-router-dom";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Youtube from "../../icons/Youtube";
import AngleIcon from "../../assets/images/icons/svg/AngleIcon";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark footer wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container-fluid py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className=" mb-4">Our Office2</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt  me-3"></i>123 Street, New
              York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt  me-3"></i>+012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope  me-3"></i>
              example@example.com
            </p>
            <div className="d-flex pt-3">
              <Link
                to="/"
                className="btn btn-square btn-success rounded-circle me-2 social-icons"
                aria-label="Twitter"
              >
                <Twitter />
              </Link>
              <Link
                className="btn btn-square btn-success rounded-circle me-2 social-icons"
                aria-label="FaceBook"
              >
                <Facebook />
              </Link>
              <Link
                className="btn btn-square btn-success rounded-circle me-2 social-icons"
                aria-label="Youtube"
              >
                <Youtube />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className=" mb-4">Quick Links</h4>
            <Link to="/about" className="btn btn-link">
              <AngleIcon /> About Us
            </Link>
            <Link to="/contact" className="btn btn-link">
              <AngleIcon /> Contact Us
            </Link>
            <Link className="btn btn-link">
              <AngleIcon /> Our Services
            </Link>
            <Link className="btn btn-link">
              <AngleIcon /> Terms & Condition
            </Link>
            <Link className="btn btn-link">
              <AngleIcon /> Support
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className=" mb-4">Business Hours</h4>
            <p className="mb-1">Monday - Friday</p>
            <span className="text-light fw-bold">09:00 am - 07:00 pm</span>
            <p className="mb-1">Saturday</p>
            <span className="text-light fw-bold">09:00 am - 12:00 pm</span>
            <p className="mb-1">Sunday</p>
            <span className="text-light fw-bold">Closed</span>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className=" mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
