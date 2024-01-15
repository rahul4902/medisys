import React from "react";
import ExclamationIcon from "../../../assets/images/icons/svg/ExclamationIcon";

const ResultCount = ({ searchLoader, recordCount, type }) => {
  return (
    <div className="col-12 mb-2 px-2">
      {!searchLoader && recordCount > 0 && (
        <h2 className="title">
          {recordCount} {type} Found
        </h2>
      )}
      {!searchLoader && !recordCount && type === "test" && (
        <h2 className="title">
          <ExclamationIcon fill="#0e3f6c" /> Ensure your spelling is accurate or
          try using a different term.
        </h2>
      )}
    </div>
  );
};

export default ResultCount;
