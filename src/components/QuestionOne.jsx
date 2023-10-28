import React from "react";

export const QuestionOne = ({ updateForm, value }) => {
  const whatIsInput = (event) => updateForm("whatIs", event.target.value);
  const valueCoffee = "a type of coffee";
  const valueLang = "a client-side scripting language";
  return (
    <div>
      <div className="question">
        What is JavaScript, and what role does it play in web development?
      </div>
      <div className="label">
        <label>
          <input
            type="radio"
            value={valueCoffee}
            onChange={whatIsInput}
            checked={value === valueCoffee}
          ></input>
          A type of coffee
        </label>
      </div>
      <div className="label">
        <label>
          <input
            type="radio"
            value={valueLang}
            onChange={whatIsInput}
            checked={value === valueLang}
          ></input>
          A client-side scripting language
        </label>
      </div>
    </div>
  );
};
