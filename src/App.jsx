import { useState } from "react";
import { QuestionOne } from "./components/QuestionOne";
import { QuestionTwo } from "./components/QuestionTwo";
import { QuestionThree } from "./components/QuestionThree";
import { QuestionFour } from "./components/QuestionFour";
import { Summary } from "./components/Summary";

export const App = () => {
  //reference to the state of the form
  const [formData, setFormData] = useState({
    whatIs: "",
    variable: "",
    datatypes: "",
    companiesReact: "",
  });

  //reference to the state of the step
  const [currentStep, setCurrentStep] = useState(0);
  //function to update the step
  const nextStep = () => {
    console.log(currentStep, "before if");
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    console.log(currentStep, "after if");
  };

  // function to update the form data

  //submit form function
  const submit = () => {
    console.log(formData);
    setCurrentStep(5);
  };

  return (
    <div className="container">
      <h2>This is the survey!</h2>
      <div className="question-container">
        <div>Question</div>
        {currentStep === 1 && <QuestionOne />}
        {currentStep === 2 && <QuestionTwo />}
        {currentStep === 3 && <QuestionThree />}
        {currentStep === 4 && <QuestionFour />}
        {currentStep === 5 && <Summary formData={formData} />}
        <div className="footer">
          {currentStep < 4 && (
            <button className="next-button" onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 4 && (
            <button className="submit-button" onClick={submit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

//one component per question and one for summary. Components should keep the heading and the buttons/select/checkboxes
//Summary has own design
