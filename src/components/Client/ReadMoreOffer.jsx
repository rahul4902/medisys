import React, { useContext } from "react";
import { useValue } from "../../context/clientContext";

const ReadMoreOffer = () => {
  const { readMoreCanvas, setReadMoreCanvas } = useValue();
  function HandleClose() {
    setReadMoreCanvas(!readMoreCanvas);
  }
  return (
    <div
      className={`offcanvas offcanvas-bottom ${
        readMoreCanvas ? "show" : ""
      } shadow rounded border-0`}
      tabIndex="-1"
      id="offcanvasWithBackdropLabel"
      aria-labelledby="offcanvasWithBackdropLabel"
    >
      <div className="offcanvas-header skeleton">
        <h5
          className="offcanvas-title line w-25 mh-25"
          id="offcanvasWithBackdropLabel"
        ></h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={HandleClose}
        ></button>
      </div>
      <div className="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </div>
        <div className="dropdown mt-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
          >
            Dropdown button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreOffer;
