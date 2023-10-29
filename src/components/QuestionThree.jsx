import React, { useState } from "react";
import "./QuestionThree.css";

export const QuestionThree = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "a) Number, String, Array, Object, Boolean",
    "b) Red, Green, Blue",
    "c) Cat, Dog, Fish",
  ];

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="question">3. What are the main data types in JavaScript?</div>
      <div className="label">
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option.split(")")[1].trim()}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
