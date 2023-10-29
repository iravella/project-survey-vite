import React, { useState, useEffect } from "react";
import "./QuestionThree.css";

// eslint-disable-next-line react/prop-types
export const QuestionThree = ({ updateForm, value }) => {
  const [selectedOption, setSelectedOption] = useState(value); // Initialize selectedOption with the provided value
  const options = [
    "a) Number, String, Array, Object, Boolean",
    "b) Red, Green, Blue",
    "c) Cat, Dog, Fish",
  ];

  // Update the selected option when the value prop changes
  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    updateForm("datatypes", selectedValue);
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
