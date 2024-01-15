import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Accordion = ({ title, info, paramCount, parameters }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question cursor-poiner">
      <header className="d-flex justify-content-between align-items-center rounded shadow mb-3 ps-2">
        <h6 onClick={() => setExpanded(!expanded)} className="question-title">
          {title} <b>({paramCount})</b>
        </h6>
        <button className="btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && (
        <p>
          {parameters?.map((param, key) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                key={key}
              >
                <p className="parameterValues">
                  {key + 1}. &nbsp;{param.title}
                </p>
              </div>
            );
          })}
        </p>
      )}
    </article>
  );
};

export default Accordion;
