import React from "react";

const SearchResults = () => {
  return (
    <div className="container testDetails py-5">
      <div className="productDetails bg-white">
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <div className="col-md-9 col-8 text-start">
            <h5 className=" mb-3">KFT Test (Kidney Function Test)</h5>

            <p>Special Instruction : No special preparation required</p>
            <p>Parameters covered : 16</p>
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <p className="mr-3">Report Frequency : Daily</p>
            </div>
          </div>
          <div className="col-md-3 col-4 text-center">
            <h2>
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-currency-rupee"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437
                                14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"
                ></path>
              </svg>
              850
            </h2>
            <button className="btn btn-primary border-primary">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="productDetails bg-white mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h5 className="text-mute">Overview</h5>
            <br />
            <h6>What is KIDNEY PANEL; KFT ?</h6>
            <div className="productDescription">
              <p>
                Kidney function tests (KFT) are usually ordered when a patient
                has risk factors for kidney dysfunction such as high blood
                pressure (hypertension), diabetes, cardiovascular disease,
                obesity, elevated cholesterol or a family history of kidney
                disease. It may also be ordered when someone has signs and
                symptoms of kidney disease, though in early stage often no
                noticeable symptoms are observed. Kidney panel is useful for
                general health screening; screening patients at risk of
                developing kidney disease; management of patients with known
                kidney disease.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="productDetails bg-white mt-5">
        <div className="row">
          <div className="col-lg-12 mt-4 mt-lg-0 parameters">
            <div className="d-flex align-items-center pb-2 mt-2 mb-3">
              <h5 className="parametersText mb-0 ml-2">Parameters</h5>
            </div>
            <div className="row parameterData">
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">1. &nbsp;A : G Ratio</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">2. &nbsp;Albumin</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">3. &nbsp;BUN/Creatinine Ratio</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">4. &nbsp;Calcium, Total</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">5. &nbsp;Chloride</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">6. &nbsp;Creatinine</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">7. &nbsp;GFR Category</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">8. &nbsp;GFR Estimated</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">9. &nbsp;Globulin(Calculated)</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">10. &nbsp;Phosphorus</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">11. &nbsp;Potassium</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">12. &nbsp;Sodium</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">13. &nbsp;Total Protein</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">14. &nbsp;Urea</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">15. &nbsp;Urea Nitrogen Blood</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <p className="parameterValues">16. &nbsp;Uric Acid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productDetails bg-white mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h5 className="text-mute">Usage</h5>
            <div className="productDescription">
              <p>
                Kidney function tests (KFT) are usually ordered when a patient
                has risk factors for kidney dysfunction such as hypertension,
                diabetes, cardiovascular disease, obesity, elevated cholesterol
                or a family history of kidney disease. It may also be ordered
                when someone has signs and symptoms of kidney disease, though in
                early stage often no noticeable symptoms are observed. Kidney
                panel is useful for general health screening; screening patients
                at risk of developing kidney disease; management of patients
                with known kidney disease. Estimated GFR is especially important
                in CKD patients CKD for monitoring, it helps to identify disease
                at early stage in those with risk factors for CKD (diabetes,
                hypertension, cardiovascular disease, and family history of
                kidney disease). Early recognition and intervention are
                important in slowing the progression of CKD and preventing its
                complications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
