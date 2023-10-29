import React from "react";
import "./QuestionFive.css";

export const QuestionFive = ({ updateForm, value }) => {
  const howFun = (event) => updateForm("howFun", event.target.value);

  return (
    <div>
      <div className="question">
        On a scale of 1-10, how fun is learning Javascript and React?
      </div>
      <div className="range-container">
        <span>1</span>
        <input
          className="range"
          type="range"
          min="1"
          max="10"
          onChange={howFun}
          value={value}
        ></input>
        <span>10</span>
      </div>
    </div>
  );
};
