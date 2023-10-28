import React from "react";
import "./QuestionFive.css";

export const QuestionFive = ({ updateForm, value }) => {
  const howFun = (event) => updateForm("howFun", event.target.value);

  return (
    <div>
      <div className="question">How fun is learning Javascript and React?</div>
      <div className="range-container">
        <input
          className="range"
          type="range"
          min="1"
          max="10"
          onChange={howFun}
          value={value}
        ></input>
      </div>
    </div>
  );
};
