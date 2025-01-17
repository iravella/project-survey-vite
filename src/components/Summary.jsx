import React from "react";
import "./Summary.css";

export const Summary = ({ formData }) => {
  const formattedCompanies = formData.companiesReact.map((company) => (
    <span className="react-companies">{company}</span>
  ));
  return (
    <div>
      <h2>Thank you for filling out our survey!</h2>
      <h3>Here is a summary of your answers:</h3>

      <p>
        According to you, JavaScript is a {formData.whatIs}, and you declare a
        variable {formData.variable}.
      </p>
      <p>The main data types of JavaScript are {formData.datatypes}.</p>
      <p>
        As a bonus, this is a list of the companies you think use React:
        {formattedCompanies}. The fun factor for learning JS and React is '
        {formData.howFun}'.
      </p>
      <p>If this is correct or not, we don’t know. We trust you!</p>
    </div>
  );
};
