import React from "react";

export const QuestionTwo = ({ updateForm, value }) => {
  const variableInput = (event) => updateForm("variable", event.target.value);
  const valueConstLet = "by using the ‘const’ or ‘let’ keywords";
  const valueShout = "by shouting its name";
  return (
    <div>
      <div className="question">
        How do you declare a variable in JavaScript?
      </div>
      <div className="label">
        <label>
          <input
            type="radio"
            value={valueConstLet}
            onChange={variableInput}
            checked={value === valueConstLet}
            name="variable"
          ></input>
          Using the ‘const’ or ‘let’ keywords
        </label>
      </div>
      <div className="label">
        <label>
          <input
            type="radio"
            value={valueShout}
            onChange={variableInput}
            checked={value === valueShout}
            name="variable"
          ></input>
          By shouting its name
        </label>
      </div>
    </div>
  );
};
