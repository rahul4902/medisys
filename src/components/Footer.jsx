import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";

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
              <i className="fa fa-envelope  me-3"></i>info@example.com
            </p>
            <div className="d-flex pt-3">
              <a
                className="btn btn-square btn-primary rounded-circle me-2"
                href="#"
              >
                <Twitter />
              </a>
              <a
                className="btn btn-square btn-primary rounded-circle me-2"
                href=""
              >
                <Facebook />
              </a>
              <a
                className="btn btn-square btn-primary rounded-circle me-2"
                href=""
              >
                <Youtube />
              </a>
              <a
                className="btn btn-square btn-primary rounded-circle me-2"
                href=""
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className=" mb-4">Quick Links</h4>
            <a className="btn btn-link" href="">
              About Us
            </a>
            <a className="btn btn-link" href="">
              Contact Us
            </a>
            <a className="btn btn-link" href="">
              Our Services
            </a>
            <a className="btn btn-link" href="">
              Terms & Condition
            </a>
            <a className="btn btn-link" href="">
              Support
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className=" mb-4">Business Hours</h4>
            <p className="mb-1">Monday - Friday</p>
            <h6 className="text-light">09:00 am - 07:00 pm</h6>
            <p className="mb-1">Saturday</p>
            <h6 className="text-light">09:00 am - 12:00 pm</h6>
            <p className="mb-1">Sunday</p>
            <h6 className="text-light">Closed</h6>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className=" mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative w-100">
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
