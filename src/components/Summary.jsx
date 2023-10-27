import React from "react";

export const Summary = ({ formData }) => {
  return (
    <div>
      <p>{formData.whatIs}</p>
      <p>{formData.variable}</p>
      <p>{formData.datatypes}</p>
      <p>{formData.companiesReact}</p>
    </div>
  );
};
