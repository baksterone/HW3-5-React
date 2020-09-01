import React from "react";
import "./Statistics.scss";

const Statistics = ({ done, active, important }) => {
  return (
    <div className="stat">
      <p>
        Done: <span id="done-counter">{done}</span>
      </p>
      <p>
        Active: <span id="active-counter">{active}</span>
      </p>
      <p>
        Important: <span id="important-counter">{important}</span>
      </p>
    </div>
  );
};

export default Statistics;
