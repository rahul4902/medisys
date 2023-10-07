import React, { useState } from "react";
import QueryImg from "../../assets/images/svg/query.svg";
import CloseIcon from "../../icons/CloseIcon";
const QueryFormPopup = () => {
  const [queryFormStatus, setQueryFormStatus] = useState(true);

  const closeBtnHandler = () => {
    setQueryFormStatus(false);
  };
  return (
    <>
      {queryFormStatus && (
        <div className="query-container">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-8 col-sm-8 col-12">
              <div className="query-background">
                <form method="post">
                  <div className="row">
                    <div className="col-md-5">
                      <img src={QueryImg} alt="query-img" />
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="row gap-1 text-center">
                        <div className="col-md-12 mb-2">
                          <input
                            type="text"
                            className="form-control ic"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="col-md-12 mb-2">
                          <input
                            type="email"
                            className="form-control ic"
                            placeholder="Enter Email-Id"
                          />
                        </div>
                        <div className="col-md-12 mb-2">
                          <input
                            type="text"
                            className="form-control ic"
                            placeholder="Enter Mobile"
                          />
                        </div>
                        <div className="col-md-12  mb-2">
                          <select
                            name="input_12"
                            className="form-control ic form-select"
                            aria-label="City"
                          >
                            <option>Select City</option>
                            <option value="Agartala">Agartala</option>
                            <option value="Agra">Agra</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Aligarh">Aligarh</option>
                            <option value="Allahabad">Allahabad</option>
                            <option value="Alwar">Alwar</option>
                            <option value="Ambala">Ambala</option>
                            <option value="Amravati">Amravati</option>
                            <option value="Amritsar">Amritsar</option>
                            <option value="Aurangabad">Aurangabad</option>
                            <option value="Azamgarh">Azamgarh</option>
                            <option value="Bahadurgarh">Bahadurgarh</option>
                            <option value="Bareilly">Bareilly</option>
                            <option value="Begusarai">Begusarai</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Bhatinda">Bhatinda</option>
                            <option value="Bhilai">Bhilai</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Bhubaneswar">Bhubaneswar</option>
                            <option value="Bijnor">Bijnor</option>
                            <option value="Bilaspur">Bilaspur</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Daltonganj">Daltonganj</option>
                            <option value="Darbhanga">Darbhanga</option>
                            <option value="Dehradun">Dehradun</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Deoria">Deoria</option>
                            <option value="Dhanbad">Dhanbad</option>
                            <option value="Durgapur">Durgapur</option>
                            <option value="Faizabad">Faizabad</option>
                            <option value="Faridabad">Faridabad</option>
                            <option value="Gaya">Gaya</option>
                            <option value="Ghaziabad">Ghaziabad</option>
                            <option value="Goa Velha">Goa Velha</option>
                            <option value="Gorakhpur">Gorakhpur</option>
                            <option value="Greater Noida">Greater Noida</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Guwahati">Guwahati</option>
                            <option value="Gwalior">Gwalior</option>
                            <option value="Haldwani">Haldwani</option>
                            <option value="Haridwar">Haridwar</option>
                            <option value="Hisar">Hisar</option>
                            <option value="Hoshiarpur">Hoshiarpur</option>
                            <option value="Howrah">Howrah</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Indore">Indore</option>
                            <option value="Jabalpur">Jabalpur</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Jalandhar">Jalandhar</option>
                            <option value="Jammu">Jammu</option>
                            <option value="Jamshedpur">Jamshedpur</option>
                            <option value="Jodhpur">Jodhpur</option>
                            <option value="Kangra">Kangra</option>
                            <option value="Kanpur">Kanpur</option>
                            <option value="Karnal">Karnal</option>
                            <option value="Khanna">Khanna</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Kota">Kota</option>
                            <option value="Kurukshetra">Kurukshetra</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Ludhiana">Ludhiana</option>
                            <option value="Mangalore">Mangalore</option>
                            <option value="Mathura">Mathura</option>
                            <option value="Meerut">Meerut</option>
                            <option value="Modinagar">Modinagar</option>
                            <option value="Moga">Moga</option>
                            <option value="Mohali">Mohali</option>
                            <option value="Moradabad">Moradabad</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Muzaffarpur">Muzaffarpur</option>
                            <option value="Mysore">Mysore</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Noida">Noida</option>
                            <option value="Panchkula">Panchkula</option>
                            <option value="Panipat">Panipat</option>
                            <option value="Pathankot">Pathankot</option>
                            <option value="Patiala">Patiala</option>
                            <option value="Patna">Patna</option>
                            <option value="Pune">Pune</option>
                            <option value="Purnia">Purnia</option>
                            <option value="Raipur">Raipur</option>
                            <option value="Ranchi">Ranchi</option>
                            <option value="Rewari">Rewari</option>
                            <option value="Rohtak">Rohtak</option>
                            <option value="Sagar">Sagar</option>
                            <option value="Saharanpur">Saharanpur</option>
                            <option value="Shillong">Shillong</option>
                            <option value="Shimla">Shimla</option>
                            <option value="Silchar">Silchar</option>
                            <option value="Siliguri">Siliguri</option>
                            <option value="Sirsa">Sirsa</option>
                            <option value="Sonipat">Sonipat</option>
                            <option value="Srinagar">Srinagar</option>
                            <option value="Udaipur">Udaipur</option>
                            <option value="Vadodara">Vadodara</option>
                            <option value="Varanasi">Varanasi</option>
                            <option value="Yamuna Nagar">Yamuna Nagar</option>
                          </select>
                        </div>
                        <div className="col-md-12 mb-2 d-flex align-itmes-center">
                          <button
                            type="button"
                            className="btn btn-success common-btn"
                          >
                            Request Visit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <span
                  className="closeBtn btn btn-success common-btn border-0"
                  onClick={closeBtnHandler}
                >
                  <CloseIcon fill="#FFF" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QueryFormPopup;
