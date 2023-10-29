import React, { useState, useEffect } from "react";

export const QuestionFour = ({ updateForm, value }) => {
  const [selectedOptions, setSelectedOptions] = useState(value); // Initialize selectedOptions with the provided value
  const options = [" Facebook", " Airbnb", " Netflix", " Google"];

  // Update the selected options when the value prop changes
  useEffect(() => {
    setSelectedOptions(value);
  }, [value]);

  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    const updatedOptions = [...selectedOptions];

    if (updatedOptions.includes(option)) {
      // Remove the option if it's already selected
      updatedOptions.splice(updatedOptions.indexOf(option), 1);
    } else {
      // Add the option if it's not selected
      updatedOptions.push(option);
    }
    setSelectedOptions(updatedOptions);
    updateForm("companiesReact", updatedOptions); // Update the form with the selected options as an array
  };

  return (
    <div>
      <div className="question">Some big companies using React</div>
      <div className="label">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={handleCheckboxChange}
            ></input>
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};
