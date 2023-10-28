import React, { useState } from "react";

export const QuestionFour = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    " Facebook",
    " Airbnb",
    " Netflix",
    " Google",
  ];

  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    if (selectedOptions.includes(option)) {
      // Remove the option if it's already selected
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // Add the option if it's not selected
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <div className="question">4. Some big companies using React</div>
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
