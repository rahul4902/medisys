import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
import Cart from "./checkout/Cart";
import { useCart } from "../../../context/CartContext";
import Patient from "./checkout/Patient";

const StepperCheckout = () => {
  const [steps] = useState([
    { title: "Cart" },
    { title: "Add Patients" },
    { title: "Add Address" },
    { title: "Review" },
  ]);

  const [activeStep, setActiveStep] = useState(0);
  const { cart } = useCart();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const stepStyles = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    height: "20px",
    width: "20px",
    // Add any other styles you want to customize here
  };
  console.log(activeStep, steps.length - 1);
  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        activeColor="#1c2b5c"
        completeColor="#1faa88"
        circleTop={0}
        size={50}
        completeBarColor="#1faa88"
        barStyle="dashed"
        completeBarStyle="dashed"
        circleFontSize={20}
        titleFontSize={16}
        
        completeTitleFontSize={16}
        customStyles={{ step: stepStyles }}
      />

      <div>
        {/* Render content for each step based on the activeStep */}
        {activeStep === 0 && <Cart />}
        {activeStep === 1 && <Patient />}
        {activeStep === 2 && <div>Patient Information</div>}
        {activeStep === 2 && <div>Review Cart</div>}
      </div>

      <div className="d-flex justify-content-between">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className="btn btn-sm btn-outline-secondary common-btn"
        >
          Back
        </button>
        {cart.length > 0 && (
          <button
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            className="btn btn-sm btn-outline-success common-btn"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default StepperCheckout;
