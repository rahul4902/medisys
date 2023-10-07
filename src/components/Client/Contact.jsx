import React from "react";
import ContactImage from "../../assets/images/contact.svg";
import PaperClip from "../../assets/images/icons/svg/PaperClip";

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="contact shadow p-30 br-20 bg-white">
        <div className="row">
          <div className="col-md-7">
            <div className="d-flex justify-content-center align-items-center h-100">
              <img src={ContactImage} alt="contact" className="w-100" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex align-items-center">
              <div className="w-100 h-100">
                <h3>Contact Us</h3>
                <p className="about-text">
                  Our team will get back to you shortly.
                </p>
                <form>
                  <div className="form-group mb-2">
                    <label htmlFor="name" className="ms-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="ic"
                      name="name"
                      placeholder="Type you name"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="email" className="ms-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="ic"
                      name="email"
                      placeholder="xyz@gmail.com"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="mobile" className="ms-2">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      className="ic"
                      name="mobile"
                      placeholder="Type your mobile number"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="message" className="ms-2">
                      How can we help you?
                    </label>
                    <textarea
                      name="message"
                      className="ic-t"
                      id="message"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="btn btn-success common-btn"
                    >
                      <PaperClip fill="#FFF" />
                      <span className="ms-2">Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="shadow bg-white mt-5 br-20 p-4"></div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
      <div className="shadow bg-white mt-5 br-20 p-4">
        <h5 className="mb-4">Find Us On Google Map</h5>
        <div className="row">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2202457965172!2d77.45337081068345!3d28.50302058984971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce93dfad8ce8f%3A0x58b1be1ec62813c2!2sAnvi%20Enterprises!5e0!3m2!1sen!2sin!4v1696613003296!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
