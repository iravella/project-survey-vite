import { QuestionOne } from "./components/QuestionOne";

const isTrue = false;

export const App = () => {
  return (
    <form>
      <div className="container">
        <h2>This is the survey!</h2>
        <div className="question-container">
          <div>Question</div>
          <QuestionOne />

          <div className="footer">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

//one component per question. Components should keep the heading and the buttons/select/checkboxes
//Summary has own design
