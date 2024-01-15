import React, { useEffect, useState } from "react";
import MapPin from "../../../assets/images/icons/svg/MapPin";
import CloseIcon from "../../../assets/images/icons/svg/CloseIcon";
import StepperCheckout from "./StepperCheckout";
import Spinner from "../includes/Spinner";

const OrderAddress = ({ setOrderAddressShow }) => {
  const [location, setLocation] = useState(null);
  const [locateMeLoader, setLocateMeLoader] = useState(false);

  const closeOrderAddress = () => {
    setOrderAddressShow(false);
  };

  const locateMe = () => {
    setLocateMeLoader(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("latitude, longitude", latitude, longitude);
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
          );
          const data = await response.json();
          const address = data.display_name;
          setLocateMeLoader(false);
          setLocation(address);
        },
        (error) => {
          setLocateMeLoader(false);
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      setLocateMeLoader(false);
      console.error("Geolocation is not supported by your browser");
    }
  };

  return (
    <div className="orderAddress p-2 p-md-0 ">
      
      <div className="orderContainer col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="d-flex justify-content-between">
          <h5 className="text-muted">Patent Information</h5>
          <button className="btn btn-sm m-0 p-0" onClick={closeOrderAddress}>
            <CloseIcon height={"1.5rem"} fill={"#d9d9d9"} />
          </button>
        </div>
        <hr />
        <form action="">
        <StepperCheckout/>
          <div className="row">
            <div className="form-group col-12 mb-2">
              <label>Patent Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Patent Name"
              />
            </div>
            <div className="form-group col-6">
              <label>Email (Optional)</label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-6 mb-2">
              <label>Mobile No</label>
              <input
                type="text"
                id="mobile"
                className="form-control"
                placeholder="Mobile No"
              />
            </div>
            <div className="form-group col-6">
              <label>House No/Flat No</label>
              <input
                type="text"
                id="houseNo"
                className="form-control"
                placeholder="House No/Flat No"
              />
            </div>
            <div className="form-group col-6">
              <label>Landmark</label>
              <input
                type="text"
                id="landmark"
                className="form-control"
                placeholder="Landmark"
              />
            </div>
            <div className="form-group col-12 mb-2">
              <div className="d-flex justify-content-between">
                <label>Pickup Address</label>
                <button
                  className="btn btn-sm"
                  title="Locate Me"
                  type="button"
                  onClick={() => {
                    locateMe();
                  }}
                >
                  Locate Me{" "}
                  {locateMeLoader ? (
                    <>
                      <Spinner/>
                    </>
                  ) : (
                    <MapPin />
                  )}
                </button>
              </div>
              <textarea
                name="address"
                id="address"
                className="form-control"
                rows="2"
                value={location}
              ></textarea>
            </div>
            <div className="form-group col-12  text-center">
              <button
                type="submit"
                className="btn btn-sm btn-success common-btn"
              >
                Order Place
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderAddress;
